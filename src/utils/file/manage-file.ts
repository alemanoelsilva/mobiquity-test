import path from 'path'
import fs from 'fs'
import util from 'util'
import { ExistFile } from './protocols/exists-file'
import { ReadFile } from './protocols/read-file'

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
        return false
      }
      return false
    }
  }

  async readFile(): Promise<string[]> {
    const resolvedPath = this.getPath()

    const data: Buffer = await readFileAsync(resolvedPath)

    return data.toString().split('\n')
  }
}
