const fileName = ".npmignore";

const template = () => `/*
!/dist/*.js
!/dist/*.d.ts
`;

const shouldOpen = false;

export { fileName, template, shouldOpen };
