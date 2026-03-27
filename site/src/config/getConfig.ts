import type { SiteConfig } from "./siteConfig";

// Server-side: читаем прямо из файла (только в Server Components / Route Handlers)
export function getConfigServer(): SiteConfig {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require("../data/config.json") as SiteConfig;
}
