import { ApiError } from './errors/api-error'
import { ManageFile } from './utils/file/manage-file'

export class Packer {
  static async pack(inputFile: string): Promise<string[]> {
    const manageFile = new ManageFile(inputFile)

    const isValidFile = await manageFile.existsFile()

    if (!isValidFile) {
      throw new ApiError('File not found')
    }

    const packages = await manageFile.readFile()

    return packages
  }
}
