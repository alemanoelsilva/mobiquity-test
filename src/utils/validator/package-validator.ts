import { PackageDto } from '../../domain/models/package-dto'
import { PackageValidation } from './package-validation/package-validation'
import { Validator } from './protocols/package-validator'
export class PackageValidator implements Validator {
  constructor(private readonly packageValidation: PackageValidation) { }

  validate(packages: PackageDto[]): boolean {
    for (const pkg of packages) {
      this.packageValidation.validateWeightLimit(pkg.packageLimitWeight)
      this.packageValidation.validteItemLimit(pkg.packagesOptions.length)
      pkg.packagesOptions.forEach(this.packageValidation.validatePriceAndWeight)
    }

    return true
  }
}
