// webpack 开发和生产环境公用的基础配置
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports  = {
  entry: path.resolve(__dirname, '../src/index.ts'), // 配置入口文件
  // 输出目录
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  // 设置引用的模块，模块后缀可以省略
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    // loader 翻译官
    rules: [
      { 
        test: /\.ts$/, 
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ], 
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
}