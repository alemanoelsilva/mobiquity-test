import { Packer } from './packer'

describe('Packer Test', () => {
  it('should return a string as result', () => {
    const filepath = 'any filepath'
    const result = Packer.pack(filepath)

    expect(result).toEqual('')
  })
})
