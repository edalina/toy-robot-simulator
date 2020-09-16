import readline = require('readline')
import { Robot } from './modules/robot'

const robot: Robot = Robot.createInstance()

const line = readline.createInterface({
  input: process.stdin
})

// Reset robot
robot.reset()

console.log('Insert robot commands')

const getCommand = () => {
  line.question('', (input) => {
    robot.executeCommand(input)
    getCommand()
  })
}

getCommand()
