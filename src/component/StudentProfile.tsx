import "./StudentProfile.css"

type StudentProfileProps = {
  name: string
  grade: number
  classNum: number | null
}

export const StudentProfile = ({ name, grade, classNum }: StudentProfileProps) => {
  return (
    <div className="student-card">
      <div className="avatar">
        {name.substring(0, 1)}
      </div>
      <div className="info">
        <h3 className="name">{name}</h3>
        <div className="badge-group">
          <span className="badge grade">{grade}학년</span>
          {classNum ? <span className="badge class">{classNum}반</span> : null}
        </div>
      </div>
    </div>
  )
}