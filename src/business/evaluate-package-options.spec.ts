import { PackageDto } from '../domain/models/package-dto'
import { EvaluatePackageOption } from './evaluate-package-options'

describe('Evaluate Package Options Test', () => {
  it('should return a string with the index 4 as the best choice', () => {
    const evaluatePackageOption = new EvaluatePackageOption()

    const packages: PackageDto = {
      packageLimitWeight: 81,
      packagesOptions: [
        { index: 1, weight: 53.38, price: 45 },
        { index: 2, weight: 88.62, price: 98 },
        { index: 3, weight: 78.48, price: 3 },
        { index: 4, weight: 72.30, price: 76 },
        { index: 5, weight: 30.18, price: 9 },
        { index: 6, weight: 46.34, price: 48 }
      ]
    }

    const result = evaluatePackageOption.getOptions(packages)

    expect(result).toEqual('4')
  })

  it('should return a string with "-" when there is no choice', () => {
    const evaluatePackageOption = new EvaluatePackageOption()

    const packages: PackageDto = {
      packageLimitWeight: 8,
      packagesOptions: [
        { index: 1, weight: 16.3, price: 34 }
      ]
    }

    const result = evaluatePackageOption.getOptions(packages)

    expect(result).toEqual('-')
  })

  it('should return a string with the index 2 and 7 as the best choice', () => {
    const evaluatePackageOption = new EvaluatePackageOption()

    const packages: PackageDto = {
      packageLimitWeight: 75,
      packagesOptions: [
        { index: 1, weight: 85.31, price: 29 },
        { index: 2, weight: 14.55, price: 74 },
        { index: 3, weight: 3.98, price: 16 },
        { index: 4, weight: 26.24, price: 55 },
        { index: 5, weight: 63.69, price: 52 },
        { index: 6, weight: 76.25, price: 75 },
        { index: 7, weight: 60.02, price: 74 },
        { index: 8, weight: 93.18, price: 35 },
        { index: 9, weight: 89.95, price: 78 }
      ]
    }

    const result = evaluatePackageOption.getOptions(packages)

    expect(result).toEqual('2,7')
  })

  it('should return a string with the index 8 and 9 as the best choice', () => {
    const evaluatePackageOption = new EvaluatePackageOption()

    const packages: PackageDto = {
      packageLimitWeight: 56,
      packagesOptions: [
        { index: 1, weight: 90.72, price: 13 },
        { index: 2, weight: 33.80, price: 40 },
        { index: 3, weight: 43.15, price: 10 },
        { index: 4, weight: 37.97, price: 16 },
        { index: 5, weight: 46.81, price: 36 },
        { index: 6, weight: 48.77, price: 79 },
        { index: 7, weight: 81.80, price: 45 },
        { index: 8, weight: 19.36, price: 79 },
        { index: 9, weight: 6.76, price: 64 }
      ]
    }

    const result = evaluatePackageOption.getOptions(packages)

    expect(result).toEqual('8,9')
  })
})
