/**
 * @description 给定一个数组，将数组旋转 K 步，返回一个新的数组
 * @example 数组[1, 2, 3, 4, 5, 6, 7] 旋转 1 步得到 [7, 1, 2, 3, 4, 5, 6],
 *          数组[1, 2, 3, 4, 5, 6, 7] 旋转 2 步得到 [7, 6, 1, 2, 3, 4, 5]
 */

// 时间复杂度 O(n^2) 空间复杂度 O(1) 因为 unshift 的时间复杂度是O(n)
export function rotateAarry1(arr: number[], k: number): number[] {
  const length = arr.length
  if (!k || length === 0) return arr
  const step = Math.abs(k) % length
  for(let i = 0; i < step; i++) {
    const current = arr.pop()
    if (current !== undefined) {
      arr.unshift(current)
    }
  }
  return arr
}

// 时间复杂度 O(1) 空间复杂度O(n)
export function rotateAarry2(arr: number[], k: number): number[] {
  const length = arr.length
  if (!k || length === 0) return arr
  const step = Math.abs(k) % length
  const front = arr.slice(0, length - step)
  const end = arr.slice(-step)
  return end.concat(front)
}

// const arr1 = []
// for(let i = 0; i < 100000; i++) {
//   arr1.push(i)
// }
// console.time('rotateAarry1')
// rotateAarry1(arr1, 90000)
// console.timeEnd('rotateAarry1')

// const arr2 = []
// for(let i = 0; i < 100000; i++) {
//   arr2.push(i)
// }
// console.time('rotateAarry2')
// rotateAarry2(arr2, 90000)
// console.timeEnd('rotateAarry2')
