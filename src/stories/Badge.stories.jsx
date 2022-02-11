import React from 'react'

import Badge from '../lib/components/badge'

export default {
  title: `Example/Badge`,
  component: Badge,
}

const Template = args => <Badge {...args} />

export const DefaultBadge = Template.bind({})
DefaultBadge.args = {}
