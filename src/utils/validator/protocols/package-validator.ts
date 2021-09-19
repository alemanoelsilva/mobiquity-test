import { PackageDto } from '../../../domain/models/package-dto'

export interface Validator {
  validate: (packages: PackageDto[]) => boolean
}
