import chalk from 'chalk'
import figlet from 'figlet'
import { startGame } from './match.js'

const log = console.log
log(figlet.textSync('Tic Tac Toe'))
log(`
   ===================================
   ${chalk.bgRed.black.bold('How to play?')}
   ${chalk.greenBright('1- Have the first player go first')}
   ${chalk.greenBright('2- Have the second player go second')}
   ${chalk.greenBright('3- Keep alternating move')}
   ${chalk.greenBright(
     'has drawn a row of three symbols',
     chalk.inverse('OR'),
     'no one can win',
   )}
   ===================================
`)

startGame()
