import { ApiError } from './errors/api-error'
import { ManageFile } from './utils/file/manage-file'
import { MapToPackage } from './utils/mappers/map-to-package'

export class Packer {
  static async pack(inputFile: string): Promise<string[]> {
    const manageFile = new ManageFile(inputFile)
    const mapToPackage = new MapToPackage()

    const isValidFile = await manageFile.existsFile()

    if (!isValidFile) {
      throw new ApiError('File not found')
    }

    const fileContent = await manageFile.readFile()

    fileContent.map(mapToPackage.mapPackage)

    return fileContent
  }
}
