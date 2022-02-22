

import React from 'react'
import Loader from '../lib/components/loader'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Example/Loader`,
  component: Loader,
}
const Template = args => <Loader {...args} />

export const DefaultLoader = Template.bind({})
DefaultLoader.args = { image: `./wakeflowlogo.png` }

export const CustomLoader = Template.bind({})
CustomLoader.args = {
  image: `pinkFlowers.jpg`,
  color: `black`,
}