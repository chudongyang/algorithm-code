/**
 * @description 用链表实现队列
 */

export interface ILinkListNode {
  value: number,
  next: ILinkListNode | null
}

export class queueLinkList {
  // 定义头指针
  private head: ILinkListNode | null = null
  // 定义尾指针
  private tail: ILinkListNode | null = null
  private len: number = 0

  add(n:number) {
    const curNode: ILinkListNode = {
      value: n,
      next: null
    }

    if (!this.head) {
      this.head = curNode
    }

    if (this.tail) {
      this.tail.next = curNode
    }
    this.len++
    this.tail = curNode
  }

  delete(): number | null {
    const headNode = this.head
    if (!headNode) return null
    // 取值
    const value = headNode.value
    // 修改指针
    this.head = headNode.next
    // 记录长度
    this.len--
    return value
  }

  get length(): number {
    return this.len
  }
}

// const queue = new queueLinkList()
// queue.add(100)
// queue.add(200)
// queue.add(300)
// console.log(queue.length)
// console.log(queue.delete())
// console.log(queue.length)
// console.log(queue.delete())
// console.log(queue.length)
// console.log(queue.delete())
// console.log(queue.length)
// console.log(queue.delete())

// 链表实现的队列和数组实现队列性能对比
// console.time('linkList to queue')
// const queue = new queueLinkList()
// for(let i = 0; i < 10 * 10000; i++ ) {
//   queue.add(i)
// }
// for(let i = 0; i < 10 * 10000; i++ ) {
//   queue.delete()
// }
// console.timeEnd('linkList to queue') // 12ms

// console.time('array to queue')
// const arr = []
// for(let i = 0; i < 10 * 10000; i++ ) {
//   arr.push(i)
// }
// for(let i = 0; i < 10 * 10000; i++ ) {
//   arr.shift()
// }
// console.timeEnd('array to queue') // 476ms