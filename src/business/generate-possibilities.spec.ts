import { Possibilities } from './generate-possibilities'

describe('Generate Possibilities Test', () => {
  it('should return all possibilities to "abc" string', () => {
    const possibilities = new Possibilities()

    possibilities.generate('abc', '')

    const result = possibilities.get()

    expect(result).toHaveLength(15)
    expect(result).toEqual([
      'abc',
      'ab',
      'acb',
      'ac',
      'a',
      'bac',
      'ba',
      'bca',
      'bc',
      'b',
      'cab',
      'ca',
      'cba',
      'cb',
      'c'
    ])
  })
})
