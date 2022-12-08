import { rollupTypescript } from "../../scripts/rollup.js";

export default [
  ...rollupTypescript("node/index", {
    external: ["@vuepress/shared", "@vuepress/utils"],
    dtsExternal: ["@vuepress/core"],
  }),
];
