const { queryString } = require('./queryString')

describe('Convert Object to query string', () => {
  it('should create a valid query string using object', () => {
    const obj = {
      name: 'Guilherme',
      profession: 'Developer',
    }

    expect(queryString(obj)).toBe('name=Guilherme&profession=Developer')
  })

  it('should create a queryString when pass array of itens', () => {
    const obj = {
      name: 'Guilherme',
      profession: 'Developer',
      abilities: ['CSS', 'JS'],
    }

    expect(queryString(obj)).toBe(
      'name=Guilherme&profession=Developer&abilities=CSS,JS'
    )
  })

  it('should not accept deep nested objects', () => {
    const obj = {
      name: 'Guilherme',
      profession: 'Developer',
      abilities: {
        one: 'CSS',
        two: 'JS',
      },
    }

    expect(() => queryString(obj)).toThrowError()
  })
})
