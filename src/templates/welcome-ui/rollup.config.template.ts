const fileName = "rollup.config.js";

const template = () => `import { getRollupConfig } from '../../rollup.config.js'

export default getRollupConfig({ pwd: __dirname, ts: true })
`;

const shouldOpen = false;

export { fileName, template, shouldOpen };
