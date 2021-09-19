export enum PACKAGE {
  WEIGHT_LIMIT = 100,
  ITEMS_LIMIT = 15
}

export interface PackageWeightLimitValidator {
  validateWeightLimit: (weight: number) => boolean
}

export interface PackageItemLimitValidator {
  validteItemLimit: (items: number) => boolean
}
