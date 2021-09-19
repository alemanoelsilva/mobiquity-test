import { ApiError } from '../../errors/api-error'
import { PackageWeightLimitValidator, PACKAGE } from './protocols/package-weight-limit-validator'

export class PackageValidator implements PackageWeightLimitValidator {
  validateWeightLimit(weight: number): boolean {
    if (weight >= PACKAGE.WEIGHT_LIMIT) {
      throw new ApiError(`The package weight (${weight}) is invalid, must be less than 100`)
    }
    return true
  }
}
