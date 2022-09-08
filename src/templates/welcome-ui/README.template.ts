const fileName = "README.md";

const template = (
  componentName: string
): string => `# @welcome-ui/${componentName.toLowerCase()}

The [${componentName}](https://welcome-ui.com/components/${componentName.toLowerCase()}) component from [@welcome-ui](https://welcome-ui.com).

![npm bundle size](https://img.shields.io/bundlephobia/minzip/@welcome-ui/${componentName.toLowerCase()}) [![License](https://img.shields.io/npm/l/welcome-ui.svg)](https://github.com/WTTJ/welcome-ui/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-mediumspringgreen.svg)](ttps://github.com/WTTJ/welcome-ui/blob/master/CONTRIBUTING.mdx)

## Installation

    yarn add @welcome-ui/${componentName.toLowerCase()}

## Import

    import { ${componentName} } from '@welcome-ui/${componentName.toLowerCase()}'

## Documentation

See the [documentation](https://welcome-ui.com/components/${componentName.toLowerCase()}) or [package source](https://github.com/WTTJ/welcome-ui/tree/master/packages/${componentName}) for more details.
`;

const shouldOpen = true;

export { fileName, template, shouldOpen };
