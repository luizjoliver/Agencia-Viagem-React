import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "luiz-joliver",
  project: "javascript-react",
  authToken: "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"

};



export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), sentryReactRouter(sentryConfig, config)],
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});