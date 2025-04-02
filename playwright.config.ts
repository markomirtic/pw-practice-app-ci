import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';

 require ('dotenv').config();

export default defineConfig<TestOptions>({
  //timeout: 40000,
  //globalTimeout: 10000,

  // expect:{
  //   timeout:2000,
  //   toMatchSnapshot: {maxDiffPixels: 50}
  // },

  //retries: 1,
  reporter:[
    // ['json', {outputFile: 'test-results/jsonReport.json'}],
    // ['junit', {outputFile: 'test-results/junitReport.xml'}],
    //['allure-playwright'],
    ['html']
  ],
  use:{

     baseURL: 'http://localhost:4200/',
     globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop/',

    trace: 'on-first-retry',
    actionTimeout:20000,
    navigationTimeout:5000,
    video:{
      mode: 'off',
      size: {width: 1920, height: 1080}
    }
  },

  projects: [
    {
      // name: 'dev',
      // use: { ...devices['Desktop Chrome'],
      //  // baseURL: 'http://localhost:4202/'
      //  },
    },
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    },

    // {
    //   name: 'firefox',
    //   use: 
    //   { 
    //     browserName: 'firefox',
    //     video:{
    //       mode: 'on',
    //       size: {width: 1920, height: 1080}
    //     }

    //   }
    // },
    // {
    //   name: 'pageObjectFullScreen',
    //   testMatch: 'usePageObjects.spec.ts',
    //   use:{
    //       viewport: {width: 1920, height: 1080}
    //   }
    // },

    // {
    //   name: 'mobile',
    //   testMatch: 'testMobile.spec.ts',
    //   use:{
    //     ...devices['iPhone 15 Pro']
        
    //   }
    // }

  ]

});
