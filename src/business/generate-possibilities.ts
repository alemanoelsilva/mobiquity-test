import { GeneratePossibilities } from '../domain/usecases/generate-possibilities'

export class Possibilities implements GeneratePossibilities {
  private readonly possibilities: string[] = []

  get(): string[] {
    return this.possibilities
  }

  generate(ids: string, str: string): string {
    if (!ids.length) return str

    for (let i = 0; i < ids.length; i++) {
      const ch = ids.charAt(i)
      const left = ids.substring(0, i)
      const right = ids.substring(i + 1)
      const possibility = this.generate(left + right, str + ch)
      this.possibilities.push(possibility)
    }

    return str
  }
}
