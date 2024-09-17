import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
const packageJson = import("./package.json");

export default defineConfig({
  plugins: [pluginReact()],
  mode: "development",
  server: {
    port: 7004,
  },
  html: {
    template: "./src/index.html",
  },
  source: {
    alias: {
      "@": "./src",
    },
  },
  dev: {
    assetPrefix: "http://localhost:7004",
  },
  tools: {
    rspack: async (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output!.uniqueName = "shared_app4";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "shared_app4",
          exposes: {
            // "./Login": "./src/App.tsx",
          },
          shared: (await packageJson).dependencies,
        }),
      ]);
    },
  },
});
