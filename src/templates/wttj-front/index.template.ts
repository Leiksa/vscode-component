const fileName = "index.tsx";

const template = (componentName: string): string => `import React from 'react'

type ${componentName}Props = {
  // Define your props here
}

export const ${componentName}: React.FC<${componentName}Props> = (props) => {
  return <div />
}
`;

const shouldOpen = true;

export { fileName, template, shouldOpen };
