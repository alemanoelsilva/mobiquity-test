import { PackageDto } from '../../../domain/package-dto'

export interface Validator {
  validate: (packages: PackageDto[]) => boolean
}
