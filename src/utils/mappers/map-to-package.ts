import { PackageDto, PackagesOptionDto } from '../../domain/package-dto'

export class MapToPackage {
  mapPackage(fileline: string): PackageDto {
    const [packageLimitWeight, options] = fileline.split(':')

    const packagesOptions: PackagesOptionDto[] = options
      .split(')')
      .map(packagesOption => packagesOption.replace(' (', ''))
      .filter(Boolean)
      .map(packagesOption => {
        const [index, weight, price] = packagesOption.split(',')

        return {
          index: Number(index),
          weight: Number(weight),
          price: Number(price.replace('€', ''))
        }
      })

    return {
      packageLimitWeight: Number(packageLimitWeight),
      packagesOptions
    }
  }
}
