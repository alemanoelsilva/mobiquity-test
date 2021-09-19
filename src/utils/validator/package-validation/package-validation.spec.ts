import { PackagesOptionDto } from '../../../domain/models/package-dto'
import { PackageValidation } from './package-validation'

describe('Package Validator Test', () => {
  describe('Validate weight package limit', () => {
    it('should true when weight is less than 100', () => {
      const packageValidation = new PackageValidation()

      const result = packageValidation.validateWeightLimit(1)

      expect(result).toBeTruthy()
    })

    it('should true when weight is equal 100', () => {
      const packageValidation = new PackageValidation()

      const result = packageValidation.validateWeightLimit(100)

      expect(result).toBeTruthy()
    })

    it('should throw an error when weight is higher than 100', () => {
      const packageValidation = new PackageValidation()

      try {
        packageValidation.validateWeightLimit(101)
      } catch (error) {
        expect(error.message).toEqual('Error: The package weight (101) is invalid, must be equal or less than 100')
      }
    })
  })

  describe('Validate item package limit', () => {
    it('should return true when limit is less than 15', () => {
      const packageValidation = new PackageValidation()

      const result = packageValidation.validteItemLimit(1)

      expect(result).toBeTruthy()
    })

    it('should return true when limit is equal 15', () => {
      const packageValidation = new PackageValidation()

      const result = packageValidation.validteItemLimit(15)

      expect(result).toBeTruthy()
    })

    it('should throw an error when limit is higher than 15', () => {
      const packageValidation = new PackageValidation()

      try {
        packageValidation.validteItemLimit(16)
      } catch (error) {
        expect(error.message).toEqual('Error: The package items (16) is invalid, must be equal or less than 15')
      }
    })
  })

  describe('Validate price and weight package', () => {
    it('should return true when the price of the package is valid', () => {
      const packageValidation = new PackageValidation()

      const packageOption: PackagesOptionDto = {
        index: 1,
        price: 50.50,
        weight: 80
      }

      const result = packageValidation.validatePriceAndWeight(packageOption)

      expect(result).toBeTruthy()
    })

    it('should throw an error when price is higher than 100', () => {
      const packageValidation = new PackageValidation()

      const packageOption: PackagesOptionDto = {
        index: 1,
        price: 100.50,
        weight: 80
      }

      try {
        packageValidation.validatePriceAndWeight(packageOption)
      } catch (error) {
        expect(error.message).toEqual('Error: The package price (100.5) is invalid, must be equal or less than 100')
      }
    })

    it('should return true when the weight of the package is valid', () => {
      const packageValidation = new PackageValidation()

      const packageOption: PackagesOptionDto = {
        index: 1,
        price: 50.50,
        weight: 80
      }

      const result = packageValidation.validatePriceAndWeight(packageOption)

      expect(result).toBeTruthy()
    })

    it('should throw an error when weight is higher than 100', () => {
      const packageValidation = new PackageValidation()

      const packageOption: PackagesOptionDto = {
        index: 1,
        price: 50.50,
        weight: 101
      }

      try {
        packageValidation.validatePriceAndWeight(packageOption)
      } catch (error) {
        expect(error.message).toEqual('Error: The package weight (101) is invalid, must be equal or less than 100')
      }
    })
  })
})
