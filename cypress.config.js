const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
    baseUrl: 'http://qalab.pl.tivixlabs.com/'
    },
    defaultCommandTimeout: 500
  },
});
