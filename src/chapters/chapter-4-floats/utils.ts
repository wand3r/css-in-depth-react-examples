export const splitBy = <T>(rowCount: number, xs: T[]): T[][] => {
  const rows = Math.ceil(xs.length / rowCount)
  const result: T[][] = []
  for (let row = 0; row < rows; row++) {
    result.push(xs.slice(row * rowCount, (row + 1) * rowCount))
  }
  return result
}
