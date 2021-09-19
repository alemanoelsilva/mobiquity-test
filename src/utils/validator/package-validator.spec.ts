import { PackageDto } from '../../domain/package-dto'
import { PackageValidation } from './package-validation/package-validation'
import { PackageValidator } from './package-validator'

interface Types {
  sut: PackageValidator
  packageValidationStub: PackageValidation
}

const makePackageValidationStub = (): PackageValidation => {
  class PackageValidationStub {
    validateWeightLimit(): boolean {
      return true
    }

    validteItemLimit(): boolean {
      return true
    }

    validatePriceAndWeight(): boolean {
      return true
    }
  }

  return new PackageValidationStub()
}

const makeSut = (): Types => {
  const packageValidationStub = makePackageValidationStub()

  const sut = new PackageValidator(packageValidationStub)

  return {
    sut,
    packageValidationStub
  }
}

describe('Package Validator Test', () => {
  it('should return true when packages are valid', () => {
    const { sut } = makeSut()

    const packages: PackageDto[] = [
      {
        packageLimitWeight: 100,
        packagesOptions: [{ index: 1, weight: 50, price: 10 }]
      }
    ]

    const result = sut.validate(packages)

    expect(result).toBeTruthy()
  })

  it('should throw an error when validateWeightLimit throws', () => {
    const { sut, packageValidationStub } = makeSut()

    const fakeError = new Error('Fake Error')

    jest.spyOn(packageValidationStub, 'validateWeightLimit')
      .mockImplementation(() => {
        throw fakeError
      })

    const packages: PackageDto[] = [
      {
        packageLimitWeight: 100,
        packagesOptions: [{ index: 1, weight: 50, price: 10 }]
      }
    ]

    try {
      sut.validate(packages)
    } catch (error) {
      expect(error.message).toEqual('Fake Error')
    }
  })
})
