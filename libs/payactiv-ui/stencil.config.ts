import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { angularOutputTarget } from "@stencil/angular-output-target";

const angularValueAccessorBindings = [];

export const config: Config = {
  namespace: "payactiv-ui",
  globalStyle: 'src/global/global.scss',
  taskQueue: "async",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
      dir: "../../dist/libs/payactiv-ui/dist",
    },
    {
      type: "docs-readme",
    },
    {
      type: 'docs-vscode',
      file: 'custom-elements.json'
    },
    {
      type: "www",
      dir: "../../dist/libs/payactiv-ui/www",
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: "@nx-angular-stencil-storybook/payactiv-ui",
      directivesProxyFile:
        "../../../libs/payactiv-ui-angular/src/generated/directives/proxies.ts",
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],

  plugins: [sass()],
};
