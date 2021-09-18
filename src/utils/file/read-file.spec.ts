import { ReadFile } from './read-file'

describe('ReadFile Test', () => {
  it('should return true when path is valid', async () => {
    const filepath = 'resources/example_input'
    const readfile = new ReadFile(filepath)

    const result = await readfile.fileExists()

    expect(result).toBeTruthy()
  })

  it('should return false when path is not valid', async () => {
    const filepath = 'invalid_file'
    const readfile = new ReadFile(filepath)

    const result = await readfile.fileExists()

    expect(result).toBeFalsy()
  })
})
