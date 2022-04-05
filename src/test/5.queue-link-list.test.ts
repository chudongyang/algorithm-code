/**
 * @description 使用链表实现队列测试用例
 */
import { queueLinkList } from '../code/5.queue-link-list'

describe('链表实现队列', () => {
  it('add and length', () => {
    const queue = new queueLinkList()
    queue.add(100)
    queue.add(200)
    queue.add(300)
    expect(queue.length).toBe(3)
  })

  it('delete', () => {
    const queue = new queueLinkList()
    expect(queue.delete()).toBeNull()
    queue.add(100)
    queue.add(200)
    queue.add(300)
    expect(queue.delete()).toBe(100)
    expect(queue.delete()).toBe(200)
    expect(queue.delete()).toBe(300)
  }) 
})