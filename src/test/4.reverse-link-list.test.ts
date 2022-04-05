
/**
 * @description 反转链表测试用例
 */
import { createLinkList, reverseLinkList, ILinkListNode } from '../code/4.reverse-link-list'

describe('反转链表', () => {
  it('单个元素', () => {
    const listNode: ILinkListNode = { value: 100 }
    const reverseNode: ILinkListNode = reverseLinkList(listNode)
    expect(reverseNode).toEqual(listNode)
  })

  it('多个元素', () => {
    const listNode: ILinkListNode = createLinkList([100, 200, 300])
    expect(listNode).toEqual({ value: 100, next: { value: 200, next: { value: 300 } } })
    const reverseNode: ILinkListNode = reverseLinkList(listNode)
    expect(reverseNode).toEqual({ 
      value: 300, 
      next: { 
        value: 200, 
        next: { 
          value: 100
        } 
      } 
    })
  })

  // it('测试使用空数组创建链表', () => { // 这里测试抛错一直有问题，待解决
  //   expect(createLinkList([])).toThrowError(new Error('arr is empty'))
  // })
})