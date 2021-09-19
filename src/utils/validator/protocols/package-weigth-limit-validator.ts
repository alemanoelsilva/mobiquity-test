export enum PACKAGE {
  WEIGTH_LIMIT = 100
}

export interface PackageWeigthLimitValidator {
  validateWeightLimit: (weigth: number) => boolean
}
