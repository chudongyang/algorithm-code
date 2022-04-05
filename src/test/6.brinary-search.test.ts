
/**
 * @description 二分法查找测试用例
 */
import { brinarySearch1, brinarySearch2 } from '../code/6.binary-search'
describe('brinarySearch1', () => {
	it('数组存在目标值', () => {
		const arr: number[] = [10, 20, 30, 40, 50]
		const target: number = 30
		expect(brinarySearch1(arr, target)).toBe(2)
	})

	it('数组不存在目标值', () => {
		const arr: number[] = [10, 20, 30, 40, 50]
		const target: number = 33
		expect(brinarySearch1(arr, target)).toBe(-1)
	})

	it('数组为空', () => {
		expect(brinarySearch1([], 10)).toBe(-1)
	})
})

describe('brinarySearch2', () => {
	it('数组存在目标值', () => {
		const arr: number[] = [10, 20, 30, 40, 50]
		const target: number = 30
		expect(brinarySearch2(arr, target)).toBe(2)
	})

	it('数组不存在目标值', () => {
		const arr: number[] = [10, 20, 30, 40, 50]
		const target: number = 33
		expect(brinarySearch2(arr, target)).toBe(-1)
	})

	it('数组为空', () => {
		expect(brinarySearch2([], 10)).toBe(-1)
	})
})