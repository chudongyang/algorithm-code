
/**
 * @description 旋转数组测试用例
 */
import { rotateAarry1, rotateAarry2 } from '../code/1.array-rotate'

describe('测试数组旋转 rotateAarry1', () => {
  it('正常情况', () => {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7]
    const k = 3
    expect(rotateAarry1(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
  it('数组为空', () => {
    const arr: number[] = []
    const k = 3
    expect(rotateAarry1(arr, k)).toEqual([])
  })
  it('k为0', () => {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7]
    const k = 0
    expect(rotateAarry1(arr, k)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
  it('k等于负值', () => {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7]
    const k = -3
    expect(rotateAarry1(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
})

describe('测试数组旋转 rotateAarry2', () => {
  it('正常情况', () => {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7]
    const k = 3
    expect(rotateAarry2(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
  it('数组为空', () => {
    const arr: number[] = []
    const k = 3
    expect(rotateAarry2(arr, k)).toEqual([])
  })
  it('k为0', () => {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7]
    const k = 0
    expect(rotateAarry2(arr, k)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
  it('k等于负值', () => {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7]
    const k = -3
    expect(rotateAarry2(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
})