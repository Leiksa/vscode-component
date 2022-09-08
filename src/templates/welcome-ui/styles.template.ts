const fileName = "styles.ts";

const template = (
  componentName: string
): string => `import styled from '@xstyled/styled-components'

export const ${componentName} = styled.div\`\`
`;

const shouldOpen = true;

export { fileName, template, shouldOpen };
