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
})
