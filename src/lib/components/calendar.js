import React from 'react'
import { DateRangePicker as ReactCalendar } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Calendar = React.forwardRef((props,ref) => {
  console.log({ props })
  const { onChange,onBlur,currentValue } = props
  const selectionRange = {
    startDate: currentValue?.startDate || new Date(),
    endDate: currentValue?.endDate || new Date(),
    key: `selection`,
  }
  const handleDateChange = e => {
    const newValue = {
      startDate: e.selection.startDate,
      endDate: e.selection.endDate,
    }
    console.log(newValue)
    onChange(newValue)
  }

  return (
    <ReactCalendar
      ranges={[selectionRange]}
      onChange={handleDateChange}
      onBlur={onBlur}
    />
  )
})

export default Calendar