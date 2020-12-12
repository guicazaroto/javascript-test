const { sum } = require('./calculator')

it('should sum 2 and 2 and the result must be 4', () => {
  expect(sum(2, 2)).toBe(4)
})

it('should 2 and 2 to be 4 if it`s string value', () => {
  expect(sum('2','2')).toBe(4)
})

it('should return an error when inputs is NaN', () => {
  expect(() => {
    sum('', 2)
  }).toThrowError()
})