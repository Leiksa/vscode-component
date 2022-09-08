const fileName = "index.tsx";

const template = (componentName: string): string => `import React from 'react'

import { render } from '../../utils/tests'

import { ${componentName} } from './index'

describe('<${componentName} />', () => {
  it('should render correctly', () => {
    const { container } = render(<${componentName} />)

    expect(container)
  })
})
`;

const shouldOpen = true;

export { fileName, template, shouldOpen };
