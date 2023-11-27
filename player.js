import inquirer from 'inquirer'
import { Board } from './board.js'

// Create move List
const MOVE_LIST = [
  '0 Top Left',
  '1 Top Middle',
  '2 Top Right',
  '3 (Middle Left)',
  '4 (Middle Middle)',
  '5 (Middle Right)',
  '6 (Bottom Left)',
  '7 (Bottom Middle)',
  '8 (Bottom Right)',
]

export class Player {
  constructor(order) {
    this.order = order
    this.name = `Player ${order}`
  }

  async init() {
    const answer = await inquirer.prompt({
      name: 'name',
      type: 'input',
      message: 'What is your name?',
      default: ``,
    })
    if (answer.name) {
      this.name = answer.name
    }
  }
  async calcMove(board) {
    const legalMoveList = MOVE_LIST.filter((_, index) => !board.table[index])
    const answer = await inquirer.prompt({
      name: 'move',
      type: 'list',
      message: `${this.name} Choose your move`,
      choices: legalMoveList,
    })
    return MOVE_LIST.findIndex((move) => move == answer.move)
  }
}
