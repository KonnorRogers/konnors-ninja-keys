import {playwrightLauncher} from '@web/test-runner-playwright';
// import { esbuildPlugin } from '@web/dev-server-esbuild';

/** @type {import("@web/test-runner").TestRunnerConfig} */
export default {
  rootDir: '.',
  nodeResolve: true,
  plugins: [
    // esbuildPlugin()
  ],
  files: [
    './src/**/*.test.js',
    './internal/**/*.test.ts',
    './tests/**/*.test.js',
  ], // "default" group
  concurrentBrowsers: 3,
  testFramework: {
    config: {
      ui: 'tdd',
      timeout: 3000,
      retries: 1,
    },
  },
  browsers: [
    playwrightLauncher({product: 'chromium'}),
    playwrightLauncher({product: 'firefox'}),
    playwrightLauncher({product: 'webkit'}),
  ],
};
