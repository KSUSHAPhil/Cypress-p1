const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    retries: 1,
    viewportHeight: 240,
    viewportWidth: 320,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
