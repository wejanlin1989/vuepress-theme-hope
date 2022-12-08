import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { getAuthor } from "vuepress-shared/node";

import type { Page, Plugin } from "@vuepress/core";
import type { CopyrightOptions } from "vuepress-plugin-copyright2";
import type {
  ThemeData,
  ThemeNormalPageFrontmatter,
} from "../../shared/index.js";

export const getCopyrightPlugin = (
  themeData: ThemeData,
  options?: Partial<CopyrightOptions> | boolean,
  hostname?: string
): Plugin | null => {
  if (!options) return null;

  return copyrightPlugin(<CopyrightOptions>{
    hostname,
    author: (page: Page<Record<string, never>, ThemeNormalPageFrontmatter>) =>
      getAuthor(page.frontmatter.author)?.[0]?.name ||
      getAuthor(themeData.author)?.[0]?.name ||
      "",
    ...(typeof options === "object" ? options : { global: true }),
  });
};
