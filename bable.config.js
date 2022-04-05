// 预设配置 是某一类 plugin 的集合，包含了某一类插件的所有功能
const presets = [
  [
    '@babel/preset-env',
    {
      target: { // 项目配置的 支持/定位 的环境
        browser: ['ie>=8', 'chrome>=62'], // 浏览器版本
        node: '8.9.0', // node 版本
        safari: 'tp' // safari 版本
      },
      modules: false, // 启用将 es6 转为其他模块
      debug: true, // 是否启用 console.log　
      uglify: true, // 压缩代码
      // true: 引用部分，根据配置的 preset-env 环境，引用 polyfill, 在入口文件中要引用 babel-polyfill
      // false: 引用所有的 babel-polyfill ， 在 webpack 中添加 babel-polyfill,  入口处: entry:[ 'babel-polyfill' , 'index.js' ] , 引用所有的 polyfill，体积变大  
      useBuiltIns: true
    }
  ]
]
// 插件配置 将某一种需要转化的代码，转为浏览器可以执行代码。
const plugins = []
module.exports = {
  presets,
  plugins
}