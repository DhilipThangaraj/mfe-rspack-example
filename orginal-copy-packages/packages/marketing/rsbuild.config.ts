import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
const packageJson = import("./package.json");

export default defineConfig({
  mode: "development",
  plugins: [pluginReact()],
  source: {
    alias: {
      "@": "./src",
    },
  },
  server: {
    port: 4000,
  },
  dev: {
    assetPrefix: "http://localhost:4000",
  },
  html: {
    template: "./src/index.html",
  },
  tools: {
    rspack: async (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output!.uniqueName = "shared_app2";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "shared_app2",
          exposes: {
            "./Marketing": "./src/bootstrap.tsx",
          },
          shared: (await packageJson).dependencies,
        }),
      ]);
    },
  },
});
