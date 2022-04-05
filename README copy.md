# algorithm-code
一些常见的算法题练习

### 项目的搭建
- 初识化项目
```js
npm init 
```
- 安装 webpack 构建工具, 命令行工具, 开发服务器
```js
yarn add webpack webpack-cli webpack-dev-server -D
```
- 生成 tsconfig.json 文件
```js
tsc --init
```
- 安装 ts 编译器和加载器(用于在webpack中编译ts文件)
```js
yarn add typescript ts-loader -D
```
- 安装 html 插件和 webpack 中的清除插件
```js
yarn add html-webpack-plugin clean-webpack-plugin -D
```
- 安装 webpack 配置合并插件
```js
yarn add webpack-merge -D         
```
- 安装 babel 相关
```js
yarn add @babel/core @babel/preset-env babel-loader babel-polyfill -D
```
> @babel/core 是 babel 的核心工具， @babel/preset-env 是 babel 的预定义环境， babel-loader 是 babel 在webpack中的加载器， babel-polyfill 用来使老版本的浏览器支持新版ES语法
- 配置 babel.config.js 文件

- 安装 jest 自动化测试工具
```js
yarn add jest ts-jest @types/jest ts-node -D 
```
- 生成 jest.config.ts 配置
```js
npx jest --init
```


### 配置 webpack.config.js
- 根目录新建 build 文件夹存放 webpack 配置文件
```js
webpack.base.js // 开发和生产环境都需要的 webpack 配置
webpack.config.js // 调用 webpack 的入口文件
webpack.dev.js // 开发环境的 webpack 配置
webpack.prod.js // 生产环境的 webpack 配置
```
- 在 package.json 中配置运行 webpack 开发和打包的脚本
```js
"scripts": {
  "build": "webpack --mode production --config ./build/webpack.config.js",
  "dev": "webpack-dev-server --mode=development --config ./build/webpack.config.js"
},
```
> sourcemap 文件的功能主要是将源代码映射为打包后的代码

### 问题
- webpack-dev-server 和 webpack serve 的区别