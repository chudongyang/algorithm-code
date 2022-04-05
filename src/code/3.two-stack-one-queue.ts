/**
 * @description 用两个栈实现一个队列，实现队列 add delete 方法和 length 属性
 * @example 
 */

export class Queue {
  private stack1: number[] = []
  private stack2: number[] = []
  // 入对
  add (ele: number) {
    this.stack1.push(ele)
  }
  // 出对
  delete () {
    if (!this.length) return undefined

    // 将 stack1 中的元素转移到 stack2 中
    while(this.stack1.length) {
      const ele = this.stack1.pop()
      if (ele || ele === 0) {
        this.stack2.push(ele)
      }
    }
    const value = this.stack2.pop()
    // 将 stack2 中剩余的元素重新转移回 stack1 中
    while(this.stack2.length) {
      const ele = this.stack2.pop()
      if (ele || ele === 0) {
        this.stack1.push(ele)
      }
    }
    return value
  }
  // 获取队列的长度
  get length(): number{
    return this.stack1.length
  }
}

// const queue = new Queue()
// queue.add(100)
// queue.add(200)
// queue.add(300)
// console.log(queue.delete())
// console.log(queue.length)
// console.log(queue.delete())
// console.log(queue.length)