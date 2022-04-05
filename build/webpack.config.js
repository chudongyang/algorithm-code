const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const webpackDevConfig = require('./webpack.dev')
const webpackProdConfig = require('./webpack.prod')

module.exports = (env, argv) => {
  const config = argv.mode === 'development' ? webpackDevConfig : webpackProdConfig
  return merge(webpackBaseConfig, config)
}