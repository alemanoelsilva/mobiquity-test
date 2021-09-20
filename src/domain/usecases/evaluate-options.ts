import { PackageDto } from '../models/package-dto'

export interface EvaluateOptions {
  getOptions: (packages: PackageDto) => string
}
