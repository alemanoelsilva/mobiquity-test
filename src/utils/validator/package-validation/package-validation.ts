import { PackagesOptionDto } from '../../../domain/package-dto'
import { ApiError } from '../../../errors/api-error'
import {
  PackageWeightLimitValidator,
  PackageItemLimitValidator,
  PackagePriceAndWeightLimitValidator,
  PACKAGE
} from '../protocols/package-validation'

export class PackageValidation implements PackageWeightLimitValidator, PackageItemLimitValidator, PackagePriceAndWeightLimitValidator {
  validateWeightLimit(weight: number): boolean {
    if (weight > PACKAGE.WEIGHT_LIMIT) {
      throw new ApiError(`The package weight (${weight}) is invalid, must be equal or less than 100`)
    }
    return true
  }

  validteItemLimit(items: number): boolean {
    if (items > PACKAGE.ITEMS_LIMIT) {
      throw new ApiError(`The package items (${items}) is invalid, must be equal or less than 15`)
    }
    return true
  }

  validatePriceAndWeight(packageOption: PackagesOptionDto): boolean {
    if (packageOption.price > PACKAGE.PRICE_LIMIT) {
      throw new ApiError(`The package price (${packageOption.price}) is invalid, must be equal or less than 100`)
    }

    if (packageOption.weight > PACKAGE.WEIGHT_LIMIT) {
      throw new ApiError(`The package weight (${packageOption.weight}) is invalid, must be equal or less than 100`)
    }

    return true
  }
}
