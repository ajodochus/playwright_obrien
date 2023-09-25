import { defineConfig, devices } from '@playwright/test';
import { profileEnd } from 'console';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
//dotenv.config({ path: path.resolve(__dirname, '..', 'api.env') });


export default defineConfig({
  expect: {
    timeout: 60 * 1000,
  },
  testDir: './tests-examples',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.WORKERS ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'login', 
      use: {
        ...devices['Desktop Chrome'],
      },
      testMatch: 'tests-examples/*login*'
    },
    {
      name: 'api',
      use: {
        // All requests we send go to this API endpoint.
        baseURL: process.env.URL, //https://api.github.com
        extraHTTPHeaders: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': 'token ' + process.env.APITOKEN,
        },
      },
      dependencies: ['login'],
    },
    {
      name: 'issues',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env.URLGUI, 
        storageState: 'tests-examples/user.json',
      },
      //dependencies: ['login'],
      testMatch: 'tests-examples/*issues*'
    },

  ],
});
