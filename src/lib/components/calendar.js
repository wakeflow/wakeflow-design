import React from 'react'
import { DateRangePicker as ReactCalendar } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Calendar = props => {
  const { onChange,onBlur,currentValue } = props
  const selectionRange = {
    startDate: currentValue?.startDate || new Date(),
    endDate: currentValue?.endDate || new Date(),
    key: `selection`,
  }
  const handleDateChange = e => {
    onChange({
      startDate: e.selection.startDate,
      endDate: e.selection.endDate,
    })
  }

  return (
    <ReactCalendar
      ranges={[selectionRange]}
      onChange={handleDateChange}
      onBlur={onBlur}
    />
  )
}

export default Calendar