import { PackageDto, PackagesOptionDto } from '../domain/models/package-dto'
import { EvaluateOptions } from '../domain/usecases/evaluate-options'
import { GeneratePossibilities } from '../domain/usecases/generate-possibilities'

export class EvaluatePackageOption implements EvaluateOptions {
  constructor(private readonly possibilities: GeneratePossibilities) { }

  private getWeightById(id: string, options: PackagesOptionDto[]): number {
    const option = options.find(option => option.index === Number(id))

    if (option) return option.weight
    return 0
  }

  private getPriceById(id: string, options: PackagesOptionDto[]): number {
    const option = options.find(option => option.index === Number(id))

    if (option) return option.price
    return 0
  }

  getOptions(packages: PackageDto): string {
    const {
      packageLimitWeight: limit,
      packagesOptions: options
    } = packages

    const validOptions = options
      .sort((optionA, optionB) => optionA.index > optionB.index ? 1 : -1)
      .filter(option => option.weight <= limit)

    if (!validOptions.length) return '-'

    const ids = validOptions.reduce((acc, option) => `${acc}${option.index}`, '')

    this.possibilities.generate(ids, '')
    const possibilities = this.possibilities.get()

    const possibilityMap = new Map()

    possibilities
      .sort()
      .forEach(id => {
        const ids = id.split('')

        const weight = ids
          .reduce((acc: number, id: string) => (acc + this.getWeightById(id, validOptions)), 0)

        const price = ids
          .reduce((acc: number, id: string) => (acc + this.getPriceById(id, validOptions)), 0)

        if (weight <= limit) possibilityMap.set(id, { weight, price })
      })

    const [[bestChoice]] = [...possibilityMap.entries()]
      .sort((possibilityA, possibilityB) => possibilityA[1].price < possibilityB[1].price ? 1 : -1)

    return bestChoice
      .split('')
      .sort((idA, idB) => idA > idB ? 1 : -1)
      .join(',')
  }
}
