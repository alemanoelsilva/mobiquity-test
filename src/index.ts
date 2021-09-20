import { Packer } from './packer'

const init = async (): Promise<void> => {
  const choices = await Packer.pack('resources/example_input')

  choices.map((choice) => console.log(choice))
}

(async () => init())()
