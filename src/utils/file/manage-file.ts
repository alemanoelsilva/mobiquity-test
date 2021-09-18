import path from 'path'
import fs from 'fs'
import util from 'util'
import { ExistFile } from './protocols/exists-file'

const accessAsync = util.promisify(fs.access)

export class ManageFile implements ExistFile {
  constructor(private readonly filepath: string) { }

  async existsFile(): Promise<boolean> {
    const resolvedPath = path.join(path.resolve(), this.filepath)
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
}
