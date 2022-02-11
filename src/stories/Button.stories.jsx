import React from 'react'
import { Button } from './Button.jsx'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Example/Button`,
  component: Button,
}
const Template = args => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  text: `Enter`,
  onClick: () => console.log(`Clicked!`),
}
export const StyledButton = Template.bind({})
StyledButton.args = {
  text: `Styled Button`,
  onClick: () => console.log(`I am a styled button 🤗`),
  style: { backgroundColor: `#afeeee`,borderRadius: `0px`,color: `black` },
}

export const IconButton = Template.bind({})
IconButton.args = {
  style: { backgroundColor: `rgba(29, 111, 66,0.9)`,color: `white`,padding: `5px 10px`,fontSize: `1rem`,border: `1px solid white`,borderRadius: `0px` },
  text: `Download`,
  onClick: () => console.log(`A download button!`),
  icon: `./excel.png`,
}