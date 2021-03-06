
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
  type: `text`,
}
export const NumberInput = Template.bind({})
NumberInput.args = { 
  label: `Number`,
  type: `number`,
  hideIncrements: true,
}
export const PasswordInput = Template.bind({})
PasswordInput.args = { 
  label: `Password`,
  type: `password`,
  required: true,
}
export const DateInput = Template.bind({})
DateInput.args = {
  css: `width: fit-content;`,
  label: `Date`,
  type: `date`,
}
export const TimeInput = Template.bind({})
TimeInput.args = {
  css: `width: fit-content;`,
  type: `time`,
  label: `Time`,
}

export const DateTimeInput = Template.bind({})
DateTimeInput.args = {
  css: `width: fit-content`,
  label: `DateTime`,
  type: `dateTime`, 
}

export const Dropdown = Template.bind({})
Dropdown.args = {
  label: `Languages`,
  options: [
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
  type: `dropdown`,
}

export const MultiSelectBoxDropdown = Template.bind({})
MultiSelectBoxDropdown.args = {
  label: `Languages`,
  options: [
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
  type: `dropdownMultiSelectBox`,
  currentValue: [{
    value: `Java123`,
    label: `Java`,
  },
  {
    value: `Javascript5`,
    label: `Javascript`,
  }],
}
export const MultiSelectCheckboxDropdown = Template.bind({})
MultiSelectCheckboxDropdown.args = {
  label: `Languages`,
  options: [
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
  type: `dropdownMultiCheckbox`,
  currentValue: [{
    value: `Java123`,
    label: `Java`,
  },
  {
    value: `Javascript5`,
    label: `Javascript`,
  }],
}
export const Calendar = Template.bind({})
Calendar.args = {
  label: `Calendar`,
  type: `calendar`,
}