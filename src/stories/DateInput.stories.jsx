
import React from 'react'
import DateInput from '../lib/components/dateInput'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Example/DateInput`,
  component: DateInput,
}
const Template = args => <DateInput {...args} />

export const SimpleDateInput = Template.bind({})
SimpleDateInput.args = {}