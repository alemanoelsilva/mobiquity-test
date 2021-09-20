import { PackageDto } from '../domain/models/package-dto'
import { GeneratePossibilities } from '../domain/usecases/generate-possibilities'
import { EvaluatePackageOption } from './evaluate-package-options'

const makePossibilitiesStub = (): GeneratePossibilities => {
  class Possibilities implements GeneratePossibilities {
    private readonly possibilities: string[] = []

    get(): string[] {
      return this.possibilities
    }

    generate(): void {
      this.possibilities.push('1')
    }
  }

  return new Possibilities()
}

interface Types {
  sut: EvaluatePackageOption
  possibilitiesStub: GeneratePossibilities
}

const makeSut = (): Types => {
  const possibilitiesStub = makePossibilitiesStub()

  const sut = new EvaluatePackageOption(possibilitiesStub)

  return {
    sut,
    possibilitiesStub
  }
}

describe('Evaluate Package Options Test', () => {
  it('should return a string with 1', () => {
    const { sut } = makeSut()

    const packages: PackageDto = {
      packageLimitWeight: 81,
      packagesOptions: [{ index: 1, weight: 53.38, price: 45 }]
    }

    const result = sut.getOptions(packages)

    expect(result).toEqual('1')
  })

  it('should return a string with - when there is no valid package', () => {
    const { sut } = makeSut()

    const packages: PackageDto = {
      packageLimitWeight: 10,
      packagesOptions: [{ index: 1, weight: 53.38, price: 45 }]
    }

    const result = sut.getOptions(packages)

    expect(result).toEqual('-')
  })
})
