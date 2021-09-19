export type PackagesOptionDto = {
  index: number
  weight: number
  price: number
}

export type PackageDto = {
  packageLimitWeight: number
  packagesOptions: PackagesOptionDto[]
}
