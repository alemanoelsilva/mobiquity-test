import { Packer } from './packer'

describe('Packer Test', () => {
  it('should return a string when file is valid', async () => {
    const filepath = 'resources/example_input'
    const result = await Packer.pack(filepath)

    expect(result.length).toEqual(4)
  })

  it('should return an error when file does not exist', async () => {
    const filepath = 'invalid_file'
    const result = await Packer.pack(filepath)

    expect(result).toEqual('Error: File invalid_file not found')
  })

  it('should return an error when weight package is invalid', async () => {
    const filepath = 'resources/example_invalid_input_weight_limit'

    const result = await Packer.pack(filepath)
    expect(result).toEqual('Error: The package weight (101) is invalid, must be equal or less than 100')
  })

  it('should return an error when items package is invalid', async () => {
    const filepath = 'resources/example_invalid_input_items_limit'

    const result = await Packer.pack(filepath)
    expect(result).toEqual('Error: The package items (16) is invalid, must be equal or less than 15')
  })

  it('should return an error when the price of package is invalid', async () => {
    const filepath = 'resources/example_invalid_input_price_limit'

    const result = await Packer.pack(filepath)
    expect(result).toEqual('Error: The package price (150) is invalid, must be equal or less than 100')
  })

  it('should return an array with the best choices according to input file', async () => {
    const filepath = 'resources/example_input'

    const result = await Packer.pack(filepath)

    expect(result.length).toEqual(4)
    expect(result[0]).toEqual('4')
    expect(result[1]).toEqual('-')
    expect(result[2]).toEqual('2,7')
    expect(result[3]).toEqual('8,9')
  })
})
