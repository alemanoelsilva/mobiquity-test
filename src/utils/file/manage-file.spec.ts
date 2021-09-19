import { ManageFile } from './manage-file'

const VALID_FILE_PATH = 'resources/example_input'
const INVALID_FILE_PATH = 'invalid_file'

describe('ManageFile Test', () => {
  describe('Validate if file exist', () => {
    it('should return true when path is valid', async () => {
      const manageFile = new ManageFile(VALID_FILE_PATH)

      const result = await manageFile.existsFile()

      expect(result).toBeTruthy()
    })

    it('should return false when path is not valid', async () => {
      const manageFile = new ManageFile(INVALID_FILE_PATH)

      try {
        await manageFile.existsFile()
      } catch (error) {
        expect(error.message).toEqual('Error: File invalid_file not found')
      }
    })
  })

  describe('Read file and return an array of string', () => {
    it('should return an array', async () => {
      const manageFile = new ManageFile(VALID_FILE_PATH)

      const result = await manageFile.readFile()

      expect(result).toBeInstanceOf(Array)
      expect(result.length).toEqual(4)
    })
  })
})
