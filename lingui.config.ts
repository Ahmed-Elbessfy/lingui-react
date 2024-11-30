import type { LinguiConfig } from "@lingui/conf";
import { formatter } from "@lingui/format-json";

const config: LinguiConfig = {
  locales: ["en", "ar"],
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
  format: formatter({ style: "lingui" }),
};

export default config;
