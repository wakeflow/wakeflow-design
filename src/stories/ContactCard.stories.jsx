
import React from 'react'
import { GitHub,Linkedin } from 'react-feather'
import ContactCard from '../lib/components/contactCard'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Example/ContactCard`,
  component: ContactCard,
}
const Template = args => <ContactCard {...args} />
export const DefaultContactCard = Template.bind({})

export const RandomContactCard = Template.bind({})
RandomContactCard.args = {
  image: `https://robohash.org/default`,
  color: { primaryColor: `rgb(158, 83, 213)`,secondaryColor: `rgb(51, 213, 187)`,textColor: `white` },
  bio: {
    name: `Mr Robot`,
    additionalDetails: `Hi this a bunch of random information about me`,
    links: [{ url: `https://github.com/`,icon: GitHub },{ url: `https://www.linkedin.com/`,icon: Linkedin }],
    email: `email@wakeflow.io`,
    phone: `+3345988237`,
  },
}
