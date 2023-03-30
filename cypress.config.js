const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
// const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify')
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  allureWriter(on, config)
  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  // on('file:preprocessor', browserify.default(config))
  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)]
    })
  )
  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    allureReuseAfterSpec: true,
    setupNodeEvents
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 15000
})
