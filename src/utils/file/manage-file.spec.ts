import { ManageFile } from './manage-file'

describe('ReadFile Test', () => {
  it('should return true when path is valid', async () => {
    const filepath = 'resources/example_input'
    const manageFile = new ManageFile(filepath)

    const result = await manageFile.existsFile()

    expect(result).toBeTruthy()
  })

  it('should return false when path is not valid', async () => {
    const filepath = 'invalid_file'
    const manageFile = new ManageFile(filepath)

    const result = await manageFile.existsFile()

    expect(result).toBeFalsy()
  })
})
