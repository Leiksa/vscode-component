const fileName = "index.stories.js";

const template = (componentName: string): string => `import React from 'react'

import { ${componentName} } from '.'

export default {
  title: 'Components/${componentName}',
}

function Template(args) {
  return <${componentName} {...args} />
}

export const Default = Template.bind({})
Default.args = {}
`;

const shouldOpen = true;

export { fileName, template, shouldOpen };
