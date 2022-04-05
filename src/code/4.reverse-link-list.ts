/**
 * @description 先实现一个用数组创建链表的函数，然后再实现一个反转链表的函数
 */

export interface ILinkListNode {
  value: number,
  next?: ILinkListNode
}

// 创建链表
export function createLinkList(arr: number[]): ILinkListNode {
  const length = arr.length
  if (!length) throw new Error('arr is empty') 

  let curNode: ILinkListNode = {
    value: arr[length - 1],
  }

  for(let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  return curNode
}

// 反转链表
export function reverseLinkList(head: ILinkListNode): ILinkListNode {
  let prevNode: ILinkListNode | undefined = undefined
  let curNode: ILinkListNode | undefined = undefined
  let nextNode: ILinkListNode | undefined = head

  while(nextNode) {
    if (curNode && !prevNode) {
      delete curNode.next
    } 
    if (curNode && prevNode) {
      curNode.next = prevNode
    }
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode.next
  }
  // 当 nextNode 不存在时，curNode 是链表的最后一项，需要修改最后一项的 next 指向
  curNode!.next = prevNode
  return curNode!
}

// const linkList = createLinkList([100, 200, 300])
// console.info(linkList) // { value: 100, next: { value: 200, next: { value: 300 } } }
// console.info(reverseLinkList(linkList)) // { value: 300, next: { value: 200, next: { value: 100 } } }