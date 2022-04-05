/**
 * @description 匹配字符串中的括号，
 * @example 字符串 'a[{(b)}c]' 移除非括号的字符串之后，得到 [{()}]，表示有效的括号，匹配成功返回 true
 *          字符串 'a[{(b)c]' 移除非括号的字符串之后，得到 [{()]，表示无效的括号，匹配成功返回 false
 * @leetcode https://leetcode-cn.com/problems/valid-parentheses/
 */

function isMatch(left: string, right: string): boolean {
  if (left === '{' && right === '}') return true
  if (left === '[' && right === ']') return true
  if (left === '(' && right === ')') return true
  return false
}
// 时间复杂度 O(n) 空间复杂度 O(n)
export function matchBrackets(str: string): boolean {
  const length = str.length
  if (!length) return true 
  const stack = []
  const leftBrackets = '{[('
  const rightBrackets = '}])'
  for(let i = 0; i < length; i++) {
    const current = str[i]
    // 左括号 压栈
    if (leftBrackets.includes(current)) {
      stack.push(current)
    }
    // 右括号 出栈
    if (rightBrackets.includes(current)) {
      const top = stack[stack.length - 1]
      if (isMatch(top, current)) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

// console.log(matchBrackets('a[{(b)}c]'), '----1')
// console.log(matchBrackets('a[{(b)c]'), '----2')
// console.log(matchBrackets(''), '----3')
// console.log(matchBrackets(')a[{(b)c]'), '----3')