# Timetable Viewer

## Usage

`public/studentinfo.json`과 `public/timetable.json`을 각각 다음에 맞는 형식으로 수정하세요.

### StudentInfo
```typescript
{ name: string
  grade: number
  class: number | null }
```

### Timetable
```typescript
{ subject: string, 
  teacher: string | null, 
  room: string | null, 
  day: "월" | "화" | "수" | "목" | "금", 
  period: number }[]
```
