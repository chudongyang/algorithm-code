/**
 * @description 两个栈实现一个队列的测试用例
 */

import { Queue } from '../code/3.two-stack-one-queue'

describe('两个栈实现一个队列', () => {
  it('add 和 length', () => {
    const queue = new Queue()
    queue.add(100)
    queue.add(200)
    queue.add(300)
    expect(queue.length).toBe(3)
  })

  it('delete', () => {
    const queue = new Queue()
    queue.add(100)
    queue.add(200)
    queue.add(300)
    expect(queue.delete()).toBe(100)
    expect(queue.length).toBe(2)
    expect(queue.delete()).toBe(200)
    expect(queue.length).toBe(1)
  })

  it('入栈 0', () => {
    const queue = new Queue()
    queue.add(0)
    queue.add(1)
    queue.add(0)
    expect(queue.delete()).toBe(0)
    expect(queue.delete()).toBe(1)
  })

  it('栈空了 delete', () => {
    const queue = new Queue()
    expect(queue.delete()).toBeUndefined()
  })
})