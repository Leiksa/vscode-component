const fileName = "tsconfig.json";

const template = () => `{
  "extends": "../../tsconfig.json",
  "include": ["index.tsx"]
}
`;

const shouldOpen = false;

export { fileName, template, shouldOpen };
