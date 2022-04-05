
/**
 * @description 匹配字符串中的括号测试用例
 */
import { matchBrackets } from '../code/2.match-brackets'

describe('括号匹配 matchBrackets', () => {
  it('匹配', () => {
    const str: string = 'a[b{c(d)e}f]g'
    expect(matchBrackets(str)).toBe(true)
  })

  it('不匹配', () => {
    const str: string = 'a[b{c(de}f]g'
    expect(matchBrackets(str)).toBe(false)
  })

  it('空字符串', () => {
    const str: string = ''
    expect(matchBrackets(str)).toBe(true)
  })
})