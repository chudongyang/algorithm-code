/**
 * @description 使用二分法查找
 */

/**
 * 循环算法实现
 * @param arr 
 * @param target 
 * @returns 
 */
export function brinarySearch1(arr: number[], target: number): number {
	const length = arr.length
	if (!length) return -1

	let startIndex: number = 0
	let endIndex: number = length - 1
	while(startIndex <= endIndex) {
		const midIndex = Math.floor((startIndex + endIndex) / 2)
		const midValue = arr[midIndex]
		if (midValue > target) { // 目标值在中间值左侧
			endIndex = midIndex - 1
		} else if ( midValue < target) { // 目标值在中间值右侧
			startIndex = midIndex + 1
		} else {
			return midIndex
		}
	}
	return -1
}
/**
 * 递归算法实现
 * @param arr 
 * @param target 
 * @param startIndex 
 * @param endIndex 
 * @returns 
 */
export function brinarySearch2(arr: number[], target: number, startIndex?: number, endIndex?: number): number {
	const length = arr.length
	if (!length) return -1
	!startIndex && (startIndex = 0)
	!endIndex && (endIndex = length -1)
	// 递归退出的条件
	if (startIndex > endIndex) return -1
	const midIndex = Math.floor((startIndex + endIndex) / 2)
	const midValue = arr[midIndex]
	if (midValue > target) { 
		return brinarySearch2(arr, target, startIndex, midIndex - 1)
	} else if ( midValue < target) {  
		return brinarySearch2(arr, target, midIndex + 1, endIndex)
	} else {
		return midIndex
	}
}
const arr = [10, 20, 30, 40, 50]
console.log(brinarySearch2(arr, 30))