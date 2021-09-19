import { PackagesOptionDto } from '../../domain/package-dto'
import { PackageValidator } from './package-validator'

describe('Package Validator Test', () => {
  describe('Validate weight package limit', () => {
    it('should true when weight is equal or less than 100', () => {
      const packageValidator = new PackageValidator()

      const result = packageValidator.validateWeightLimit(1)

      expect(result).toBeTruthy()
    })

    it('should throw an error when weight is higher than 100', () => {
      const packageValidator = new PackageValidator()

      try {
        packageValidator.validateWeightLimit(101)
      } catch (error) {
        expect(error.message).toEqual('Error: The package weight (101) is invalid, must be less than 100')
      }
    })
  })

  describe('Validate item package limit', () => {
    it('should return true when limit is equal or less than 15', () => {
      const packageValidator = new PackageValidator()

      const result = packageValidator.validteItemLimit(1)

      expect(result).toBeTruthy()
    })

    it('should throw an error when limit is higher than 15', () => {
      const packageValidator = new PackageValidator()

      try {
        packageValidator.validteItemLimit(16)
      } catch (error) {
        expect(error.message).toEqual('Error: The package items (16) is invalid, must be less than 15')
      }
    })
  })

  describe('Validate price and weight package', () => {
    it('should return true when the price of the package is valid', () => {
      const packageValidator = new PackageValidator()

      const packageOption: PackagesOptionDto = {
        index: 1,
        price: 50.50,
        weight: 80
      }

      const result = packageValidator.validatePriceAndWeight(packageOption)

      expect(result).toBeTruthy()
    })

    it('should throw an error when price is higher than 100', () => {
      const packageValidator = new PackageValidator()

      const packageOption: PackagesOptionDto = {
        index: 1,
        price: 100.50,
        weight: 80
      }

      try {
        packageValidator.validatePriceAndWeight(packageOption)
      } catch (error) {
        expect(error.message).toEqual('Error: The package price (100.5) is invalid, must be less than 100')
      }
    })

    it('should return true when the weight of the package is valid', () => {
      const packageValidator = new PackageValidator()

      const packageOption: PackagesOptionDto = {
        index: 1,
        price: 50.50,
        weight: 80
      }

      const result = packageValidator.validatePriceAndWeight(packageOption)

      expect(result).toBeTruthy()
    })
  })
})
