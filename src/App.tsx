import { useState, useEffect } from 'react'

import './App.css'
import DaySelector from './component/DaySelector'
import { StudentProfile } from './component/StudentProfile'
import { SubjectItem } from './component/SubjectItem'
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom'

type Day = "월" | "화" | "수" | "목" | "금"
type Lesson = { subject: string, teacher: string | null, room: string | null, day: Day, period: number }
type StudentInfo = { name: string, grade: number, class: number | null }

function Main() {
  const [timetable, setTimetable] = useState<Lesson[]>([])
  const [studentInfo, setStudentInfo] = useState<StudentInfo>()

  const [searchParams, setSearchParams] = useSearchParams()

  const currentDay = (searchParams.get('day') as Day) || '월'

  const handleDayChange = (day: Day) => {
    setSearchParams({ day })
  }

  useEffect(() => {
    fetch('/timetable.json')
      .then((res) => res.json())
      .then((json: Lesson[]) => {
        setTimetable(json)
      })
      .catch((err) => {
        console.error(err)
      })
    fetch('/studentinfo.json')
      .then((res) => res.json())
      .then(setStudentInfo)
      .catch((err) => {
        console.error(err)
      })
  }, [])

  if (!studentInfo) {
    return <div></div>
  }

  if (!timetable) {
    return <div></div>
  }

  return (
    <>
      <StudentProfile name={studentInfo.name} grade={studentInfo.grade} classNum={studentInfo.class} />
      <DaySelector selectedDay={currentDay} onDayChange={handleDayChange} />
      <div className='subject-list'>
        {timetable
          .filter(lesson => lesson.day == currentDay)
          .map(lesson => {
            return <SubjectItem
              period={lesson.period}
              title={lesson.subject}
              badge={
                lesson.teacher
                  ? (
                    lesson.teacher?.indexOf(',') == -1
                      ? lesson.teacher
                      : (teachers =>
                        teachers[0] + ' 외 ' + (teachers.length - 1))(lesson.teacher.split(','))
                  )
                  : " "} />
          })}
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
