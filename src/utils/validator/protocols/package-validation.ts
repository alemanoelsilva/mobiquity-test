import { PackagesOptionDto } from '../../../domain/models/package-dto'

export enum PACKAGE {
  WEIGHT_LIMIT = 100,
  ITEMS_LIMIT = 15,
  PRICE_LIMIT = 100
}

export interface PackageWeightLimitValidator {
  validateWeightLimit: (weight: number) => boolean
}

export interface PackageItemLimitValidator {
  validteItemLimit: (items: number) => boolean
}

export interface PackagePriceAndWeightLimitValidator {
  validatePriceAndWeight: (packageOption: PackagesOptionDto) => boolean
}
