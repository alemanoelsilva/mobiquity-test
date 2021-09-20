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
})
