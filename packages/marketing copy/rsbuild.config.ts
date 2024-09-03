import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  source: {
    alias: {
      "@": "./src",
    },
  },
  server: {
    port: 3002,
  },
  dev: {
    assetPrefix: "http://localhost:3002",
  },
  plugins: [pluginReact()],
});
