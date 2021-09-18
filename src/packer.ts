import { ApiError } from './errors/api-error'
import { ReadFile } from './utils/file/read-file'

export class Packer {
  static async pack(inputFile: string): Promise<string> {
    const readFile = new ReadFile(inputFile)

    const isValidFile = await readFile.fileExists()

    if (!isValidFile) {
      throw new ApiError('File not found')
    }

    return ''
  }
}
