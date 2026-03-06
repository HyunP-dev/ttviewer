import "./DaySelector.css"


export type Day = "월" | "화" | "수" | "목" | "금"

type DaySelectorProps = {
  selectedDay: Day
  onDayChange: (day: Day) => void
}

const DaySelector = ({ selectedDay, onDayChange }: DaySelectorProps) => {
  const days: Day[] = ["월", "화", "수", "목", "금"]

  return (
    <div className="day-selector-container">
      {days.map((day) => (
        <button
          key={day}
          className={`day-button ${selectedDay === day ? 'active' : ''}`}
          onClick={() => onDayChange(day)}
        >
          {day}
        </button>
      ))}
    </div>
  )
}

export default DaySelector