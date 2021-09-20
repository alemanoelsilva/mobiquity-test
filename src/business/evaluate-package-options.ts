import { PackageDto, PackagesOptionDto } from '../domain/models/package-dto'
import { EvaluateOptions } from '../domain/usecases/evaluate-options'

export class EvaluatePackageOption implements EvaluateOptions {
  private readonly possibilities: string[] = []

  private getPossilitiesIds(ids: string, str: string): string {
    if (!ids.length) return str

    for (let i = 0; i < ids.length; i++) {
      const ch = ids.charAt(i)
      const left = ids.substring(0, i)
      const right = ids.substring(i + 1)
      const rest = left + right
      const possibility = this.getPossilitiesIds(rest, str + ch)
      this.possibilities.push(possibility)
    }

    return str
  }

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

  getOptions(packages: PackageDto): any {
    const {
      packageLimitWeight: limit,
      packagesOptions: options
    } = packages

    const validOptions = options
      .sort((optionA, optionB) => optionA.index > optionB.index ? 1 : -1)
      .filter(option => option.weight <= limit)

    if (!validOptions.length) return '-'

    const ids = validOptions.reduce((acc, option) => `${acc}${option.index}`, '')

    this.getPossilitiesIds(ids, '')

    const possibility = new Map()

    this.possibilities
      .sort()
      .forEach(id => {
        const ids = id.split('')

        const weight = ids.reduce((acc, id) => (acc + this.getWeightById(id, validOptions)), 0)
        const price = ids.reduce((acc, id) => (acc + this.getPriceById(id, validOptions)), 0)

        if (weight <= limit) possibility.set(id, { weight, price })
      })

    const [[bestChoice]] = [...possibility.entries()]
      .filter(([key, { weight }]) => weight <= limit)
      .sort((possibilityA, possibilityB) => possibilityA[1].price < possibilityB[1].price ? 1 : -1)

    return bestChoice
      .split('')
      .sort((idA, idB) => idA > idB ? 1 : -1)
      .reduce((acc, choice) => `${acc},${choice}`, '')
      .slice(1)
  }
}
