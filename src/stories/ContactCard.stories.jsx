
import React from 'react'
import { GitHub,Linkedin } from 'react-feather'
import ContactCard from '../lib/components/contactCard'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Example/ContactCard`,
  component: ContactCard,
}
const Template = args => <ContactCard {...args} />

export const PrimaryContactCard = Template.bind({})
PrimaryContactCard.args = {
  image: `./JoshProfilePhoto_1.jpg`,
  color: { primaryColor: `rgb(158, 83, 213)`,secondaryColor: `rgb(51, 213, 187)`,textColor: `white` },
  bio: {
    name: `Joshua Ryland`,
    additionalDetails: `Developer\n Wakeflow\n 34 Rue du Fer A Moulin, 75005, Paris`,
    links: [{ url: `https://github.com/JRyGithub`,icon: GitHub },{ url: `https://www.linkedin.com/in/joshua-ryland/`,icon: Linkedin }],
    email: `josh@wakeflow.io`,
    phone: `+33769887928`,
  },
}
