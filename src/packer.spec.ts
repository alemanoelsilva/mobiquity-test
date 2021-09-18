import { Packer } from './packer'

describe('Packer Test', () => {
  it('should return a string when file is valid', async () => {
    const filepath = 'resources/example_input'
    const result = await Packer.pack(filepath)

    expect(result).toEqual('')
  })
})
