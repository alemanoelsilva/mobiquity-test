import { ApiError } from '../../errors/api-error'
import { PackageWeigthLimitValidator, PACKAGE } from './protocols/package-weigth-limit-validator'

export class PackageValidator implements PackageWeigthLimitValidator {
  validateWeightLimit(weight: number): boolean {
    if (weight >= PACKAGE.WEIGTH_LIMIT) {
      throw new ApiError(`The package weight (${weight}) is invalid, must be less than 100`)
    }
    return true
  }
}
