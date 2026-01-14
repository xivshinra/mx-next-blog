import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import mdx from "eslint-plugin-mdx";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    files: ["**/*.mdx"],
    plugins: {
      mdx,
    },
    processor: mdx.processors.mdx,
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
