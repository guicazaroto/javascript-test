const { queryString } = require('./queryString')

describe('Convert Object to query string', () => {
  it('should create a valid query string using object', () => {
    const obj = {
      name: 'Guilherme',
      profession: 'Developer',
    }

    expect(queryString(obj)).toBe('name=Guilherme&profession=Developer')
  })
})
