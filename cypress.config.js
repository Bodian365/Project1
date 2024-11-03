const webpackConfig = require('./config/webpack.cypress.config');

const { defineConfig } = require('cypress')

module.exports = defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
            webpackConfig, // webpackConfig: webpackConfig,
        },
        specPattern: ['src/**/*.cy.{js,jsx}'],
        setupNodeEvents(on, config) {
            // component testing node events setup code
            // https://docs.cypress.io/guides/tooling/code-coverage
            require('@cypress/code-coverage/task')(on, config);

            on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

            return config;
        },
    },

  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config
    },
  },
})