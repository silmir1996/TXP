const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://integration.app2.thexplace.ai/community/events',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin : true,
    'chromeWebSecurity': false,
    "cucumberautocomplete.strictGherkinCompletion": true,
    "include": ["node_modules/cypress", "./cypress/**/*.js"],
    'supportFile': false,
    'viewportHeight': 900,
    'viewportWidth': 1440,
    
    async setupNodeEvents(on, config) {
      require('cypress-data-session/src/plugin')(on, config);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      
      return config;
    },

    specPattern: '**/e2e/*.feature',
  },
});