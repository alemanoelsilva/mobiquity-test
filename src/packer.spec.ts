import { Packer } from './packer'

describe('Packer Test', () => {
  it('should return a string when file is valid', async () => {
    const filepath = 'resources/example_input'
    const result = await Packer.pack(filepath)

    expect(result.length).toEqual(4)
  })

  it('should throw an "File not found" when file is no valid', async () => {
    const filepath = 'invalid_file'
    const promise = Packer.pack(filepath)

    await expect(promise).rejects.toThrow('Error: File not found')
  })
})
