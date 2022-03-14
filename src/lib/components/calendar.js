import React from 'react'
import { DateRangePicker as ReactCalendar } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Calendar = React.forwardRef((props,ref) => {
  const { handleChange,handleBlur,currentValue } = props
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
    handleChange(newValue)
  }

  return (
    <ReactCalendar
      ranges={[selectionRange]}
      onChange={handleDateChange}
      onBlur={handleBlur}
      {...props}
    />
  )
})

export default Calendar