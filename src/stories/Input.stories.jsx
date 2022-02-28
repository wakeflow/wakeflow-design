
import React from 'react'
import Input from '../lib/components/input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Example/Input`,
  component: Input,
}
const Template = args => <Input {...args} />

export const SimpleInput = Template.bind({})
SimpleInput.args = { 
  label: `Username`,
  backgroundColor: `rgba(28, 28, 28, 0.9)`,
  labelColor: `white`,
  css: `> div > div > input {color: white;}`,
  type: `text`,
}
export const PasswordInput = Template.bind({})
PasswordInput.args = { 
  label: `Password`,
  backgroundColor: `rgba(28, 28, 28, 0.9)`,
  labelColor: `white`,
  css: `> div > div > input {color: white;}`,
  type: `password`,
  required: true,
}
export const DateInput = Template.bind({})
DateInput.args = {
  css: `width: fit-content; > div { > div > input {color: black;}}`,
  label: `Date`,
  backgroundColor: `rgba(243, 186, 29, 0.9)`,
  labelColor: `black`,
  type: `date`,
}
export const TimeInput = Template.bind({})
TimeInput.args = {
  css: `width: fit-content; > div { color: white; > div > input {color: black;}}`,
  backgroundColor: `rgba(5, 104, 1, 0.9)`,
  type: `time`,
  label: `Time`,
}

export const DateTimeInput = Template.bind({})
DateTimeInput.args = {
  css: `width: fit-content; > div { color: white; > div > input {color: blue;}}`,
  backgroundColor: `rgba(0, 0, 0, 0.9)`,
  label: `DateTime`,
  type: `dateTime`, 
}

export const InputDropdown = Template.bind({})
InputDropdown.args = {
  label: `Languages`,
  list: [
    {
      value: `Java123`,
      label: `Java`,
    },
    {
      value: `Javascript5`,
      label: `Javascript`,
    },{
      value: `python1`,
      label: `Python`,
    },
    {
      value: `3214`,
      label: `Go`,
    },
  ],
  backgroundColor: `rgba(29, 243, 29, 0.9)`,
  css: `> div > div > input {color: black;}`,
  labelColor: `black`,
  type: `dropdown`,
}