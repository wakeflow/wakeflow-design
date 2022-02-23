
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
  css: `width: fit-content; > div { padding: 5px; > div > input {color: black;}}`,
  label: `Date`,
  backgroundColor: `rgba(243, 186, 29, 0.9)`,
  labelColor: `black`,
  type: `date`,
}