import { ApiError } from '../../errors/api-error'
import {
  PackageWeightLimitValidator,
  PackageItemLimitValidator,
  PACKAGE
} from './protocols/package-weight-limit-validator'

export class PackageValidator implements PackageWeightLimitValidator, PackageItemLimitValidator {
  validateWeightLimit(weight: number): boolean {
    if (weight >= PACKAGE.WEIGHT_LIMIT) {
      throw new ApiError(`The package weight (${weight}) is invalid, must be less than 100`)
    }
    return true
  }

  validteItemLimit(items: number): boolean {
    if (items >= PACKAGE.ITEMS_LIMIT) {
      throw new ApiError(`The package items (${items}) is invalid, must be less than 15`)
    }
    return true
  }
}
