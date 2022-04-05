/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // 每次测试之间自动清除模拟调用和实例
  clearMocks: true,
  // 在执行测试时是否应收集覆盖率信息,如果开启则执行 jest 默认会生成 coverage 覆盖率目录
  collectCoverage: true,
  // Jest 输出覆盖信息文件的目录
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  // 正则表达式匹配到的使用对应的解释器解析
  transform: { // 这个字段需要配置，否则会报错
    "^.+\\.tsx?$": "ts-jest"
  },
  // An array of file extensions your modules use
  // moduleFileExtensions: [
  //   "js",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "json",
  //   "node"
  // ],
  // Jest 应该扫描其中的测试和模块的根目录
  // rootDir: undefined,
  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?)$',
  // A map from regular expressions to paths to transformers
};
