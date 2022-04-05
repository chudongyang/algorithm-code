
const parseAmount1 = (amount: number) => {
  const result: string[] = []
  if (!amount) {
    return '不限额'
  }
  const amountArr = amount.toFixed(0).split('')
  const maxUnit = '万'
  const amountUnit = ['万', '千', '百', '十', '元', '角', '分']
  for (let i = amountArr.length - 1; i >=0; i--) {
    const last = Number(amountArr[i])
    const lastUnit = amountUnit.pop()
    if (last && lastUnit !== maxUnit) {
      result.unshift(`${last}${lastUnit}`)
    }
    if (lastUnit === maxUnit) {
      result.unshift(`${amountArr.slice(0, i + 1).join('')}${maxUnit}`)
      break
    }
  }
  return result.join('')
}