import { PackageDto } from '../../domain/package-dto'
import { MapToPackage } from './map-to-package'

describe('MapToPackage Test', () => {
  it.only('should return a string', () => {
    const mapToPackage = new MapToPackage()

    const fileline = '81 : (1,53.38,€45) (2,88.62,€98) (3,78.48,€3) (4,72.30,€76) (5,30.18,€9) (6,46.34,€48)'

    const result: PackageDto = mapToPackage.mapPackage(fileline)

    expect(result).toEqual({
      packageLimitWeight: 81,
      packagesOptions: [
        { index: 1, weight: 53.38, price: 45 },
        { index: 2, weight: 88.62, price: 98 },
        { index: 3, weight: 78.48, price: 3 },
        { index: 4, weight: 72.30, price: 76 },
        { index: 5, weight: 30.18, price: 9 },
        { index: 6, weight: 46.34, price: 48 }
      ]
    })
  })
})
