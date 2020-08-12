import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'regent',
  taskQueue: 'async',
  plugins: [
    sass({
      injectGlobalPaths: ['src/globals/reset.scss', 'src/globals/variables.scss'],
    }),
  ],
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
