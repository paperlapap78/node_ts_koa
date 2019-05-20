function substract(x: number, y: number): number {
  return x - y
}

test('adds 3 - 2 to equal 1', () => {
  expect(substract(3, 2)).toBe(1)
})
