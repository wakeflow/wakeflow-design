import React from 'react'
import { Button } from '../lib'
import Toaster,{ toast } from '../lib/components/toaster'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: `Example/Toast`,
  component: Button,
}

const Template = args => <><Toaster/><Button {...args} /></>

export const InfoToast = Template.bind({})
InfoToast.args = {
  text: `Click Me, to try 🔥 toast.info("<text>") 🔥`,
  onClick: () => toast.info(`This is an information Toast 🍞`),
  css: `background-color: black;
  border-radius: 0px;
  color: white;
  `,
}
export const SuccessToast = Template.bind({})
SuccessToast.args = {
  text: `Click Me, to try 🔥 toast.success("<text>") 🔥`,
  onClick: () => toast.success(`🔥 This is an success Toast 🍞`),
  css: `background-color: green;
  border-radius: 0px;
  color: white;
  `,
}
export const ErrorToast = Template.bind({})
ErrorToast.args = {
  text: `Click Me, to try 🔥 toast.error("<text>") 🔥`,
  onClick: () => toast.error(`🔥 This is an error Toast 🍞`),
  css: `background-color: red;
  border-radius: 0px;
  color: white;
  `,
}

