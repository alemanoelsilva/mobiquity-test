export enum PACKAGE {
  WEIGHT_LIMIT = 100
}

export interface PackageWeightLimitValidator {
  validateWeightLimit: (weight: number) => boolean
}
