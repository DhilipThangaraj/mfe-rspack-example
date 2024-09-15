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
    port: 2000,
  },
  html: {
    template: "./src/index.html",
  },
  tools: {
    rspack: async (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: "host_app",
          remotes: {
            shared_app1: "shared_app1@http://localhost:3000/mf-manifest.json",
            shared_app2: "shared_app2@http://localhost:4000/mf-manifest.json",
          },
          shared: (await packageJson).dependencies,
        }),
      ]);
    },
  },
});
