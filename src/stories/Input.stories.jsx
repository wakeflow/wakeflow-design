
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
  style: { color: `white` },
}
export const PasswordInput = Template.bind({})
PasswordInput.args = { 
  label: `Password`,
  backgroundColor: `rgba(28, 28, 28, 0.9)`,
  labelColor: `white`,
  style: { color: `white` },
  type: `password`,
  required: true,
}
