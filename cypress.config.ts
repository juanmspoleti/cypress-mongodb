import { defineConfig } from "cypress"
import { configurePlugin } from 'cypress-mongodb';

export default defineConfig({
  video: false,
  retries: {
    runMode: 0,
    openMode: 0
  },
  chromeWebSecurity: false,
  env: {
    mongodb: {
        uri: 'mongodb://localhost:27017',
        database: 'database',
        collection: 'collection'
    }
},
  e2e: {
    specPattern: "cypress/tests/**/*.cy.ts",

    setupNodeEvents(on: any) {
      configurePlugin(on);
    }
  }
})