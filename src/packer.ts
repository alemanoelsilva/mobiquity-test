import { ApiError } from './errors/api-error'
import { ManageFile } from './utils/file/manage-file'
import { MapToPackage } from './utils/mappers/map-to-package'
import { PackageValidation } from './utils/validator/package-validation/package-validation'
import { PackageValidator } from './utils/validator/package-validator'

export class Packer {
  static async pack(inputFile: string): Promise<string[]> {
    try {
      const manageFile = new ManageFile(inputFile)
      const mapToPackage = new MapToPackage()
      const packageValidator = new PackageValidator(new PackageValidation())

      const isValidFile = await manageFile.existsFile()

      if (!isValidFile) {
        throw new ApiError('File not found')
      }

      const fileContent = await manageFile.readFile()

      const packages = fileContent.map(mapToPackage.mapPackage)

      packageValidator.validate(packages)

      return fileContent
    } catch (error) {
      // TODO implements logger
      return error.message
    }
  }
}
