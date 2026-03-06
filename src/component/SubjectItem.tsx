import './SubjectItem.css'

type SubjectItemProps = {
  period: number
  title: string
  badge: string
}

export const SubjectItem = ({ period, title, badge }: SubjectItemProps) => {
  let displayRoom = badge
  return (
    <div className='subject-item'>
      <div className='subject-period'>{period}교시</div>
      <div className='subject-title'>{title}</div>
      <div className='subject-room'>{displayRoom}</div>
    </div>
  )
}