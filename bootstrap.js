const path = require('path')
const tsConfigPath = require('tsconfig-paths')

const tsConfig = require('./tsconfig.json')

const baseUrl = path.resolve(__dirname, './build')

tsConfigPath.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths,
})
