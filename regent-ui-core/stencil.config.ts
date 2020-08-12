import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'regent',
  taskQueue: 'async',
  globalStyle: 'src/global/variables.css',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@regent/ui-core',
      directivesProxyFile: '../regent-ui-ng/src/lib/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
