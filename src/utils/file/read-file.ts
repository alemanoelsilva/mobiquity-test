import path from 'path'
import fs from 'fs'
import util from 'util'

const accessAsync = util.promisify(fs.access)

export class ReadFile {
  constructor(private readonly filepath: string) { }

  async fileExists(): Promise<boolean> {
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
