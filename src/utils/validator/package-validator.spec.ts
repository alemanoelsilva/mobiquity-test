import { PackageValidator } from './package-validator'

describe('Package Validator Test', () => {
  describe('Validate weight package limit', () => {
    it('should true when weight is equal or less than 100', () => {
      const packageValidator = new PackageValidator()

      const result = packageValidator.validateWeightLimit(1)

      expect(result).toBeTruthy()
    })
  })
})
