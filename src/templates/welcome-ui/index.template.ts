const fileName = "index.ts";

const template = (componentName: string): string => `import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export interface ${componentName}Options {
    // Define your props here
}

export type ${componentName}Props = CreateWuiProps<'div', ${componentName}Options>

export const ${componentName} = forwardRef<'div', ${componentName}Props>((props, ref) => <S.${componentName} />)

${componentName}.displayName = '${componentName}'
`;

const shouldOpen = true;

export { fileName, template, shouldOpen };
