import path from 'path'
import fs from 'fs'
import util from 'util'
import { ExistFile } from './protocols/exists-file'
import { ReadFile } from './protocols/read-file'
import { ApiError } from '../../errors/api-error'

const accessAsync = util.promisify(fs.access)
const readFileAsync = util.promisify(fs.readFile)

export class ManageFile implements ExistFile, ReadFile {
  constructor(private readonly filepath: string) { }

  private getPath(): string {
    return path.join(path.resolve(), this.filepath)
  }

  async existsFile(): Promise<boolean> {
    const resolvedPath = this.getPath()

    try {
      await accessAsync(resolvedPath)
      return true
    } catch (error) {
      // TO DO: implement logger
      if (error.code === 'ENOENT') {
        throw new ApiError(`File ${this.filepath} not found`)
      }
      throw new ApiError(`Interval Server Errror ${error.message}`)
    }
  }

  async readFile(): Promise<string[]> {
    const resolvedPath = this.getPath()

    const data: Buffer = await readFileAsync(resolvedPath)

    return data.toString().split('\n')
  }
}
