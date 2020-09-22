const assert = require('assert')
const { Robot } = require('../modules/robot')

describe('Robot Test', () => {
  const robot = Robot.createInstance()
  it ('Place SOUTH-WEST, facing east, moved 2 tiles', () => {
    // Good to reset the robot
    robot.reset()
    robot.executeCommand('PLACE 0,0,EAST')
    robot.executeCommand('MOVE')
    robot.executeCommand('MOVE')
    assert.strictEqual(`2, 0 EAST`, robot.getPosition())
  })
  it ('Place NORTH-WEST, facing east, moved 2 tiles', () => {
    // Good to reset the robot
    robot.reset()
    robot.executeCommand('PLACE 0,4,EAST')
    robot.executeCommand('MOVE')
    robot.executeCommand('MOVE')
    assert.strictEqual(`2, 4 EAST`, robot.getPosition())
  })
  it ('Place SOUTH-WEST, facing east, turn left', () => {
    // Good to reset the robot
    robot.reset()
    robot.executeCommand('PLACE 0,0,EAST')
    robot.executeCommand('LEFT')
    assert.strictEqual(`0, 0 NORTH`, robot.getPosition())
  })
  it ('Place SOUTH-WEST, facing NORTH, turn left', () => {
    // Good to reset the robot
    robot.reset()
    robot.executeCommand('PLACE 0,0,NORTH')
    robot.executeCommand('LEFT')
    assert.strictEqual(`0, 0 WEST`, robot.getPosition())
  })
  it ('Place SOUTH-WEST, facing east, turn right', () => {
    // Good to reset the robot
    robot.reset()
    robot.executeCommand('PLACE 0,0,EAST')
    robot.executeCommand('RIGHT')
    assert.strictEqual(`0, 0 SOUTH`, robot.getPosition())
  })
  it ('Place SOUTH-WEST, facing NORTH, turn right', () => {
    // Good to reset the robot
    robot.reset()
    robot.executeCommand('PLACE 0,0,NORTH')
    robot.executeCommand('RIGHT')
    assert.strictEqual(`0, 0 EAST`, robot.getPosition())
  })
  it ('Place NORTH-EAST, facing EAST, move 1', () => {
    // Good to reset the robot
    robot.reset()
    robot.executeCommand('PLACE 3,4,EAST')
    robot.executeCommand('MOVE')
    assert.strictEqual('3, 4 EAST', robot.getPosition())
  })
  it ('Place NORTH-EAST, facing EAST, turn left twice, move 5', () => {
    // Good to reset the robot
    robot.reset()
    robot.executeCommand('PLACE 3,4,EAST')
    robot.executeCommand('LEFT')
    robot.executeCommand('LEFT')
    robot.executeCommand('MOVE')
    robot.executeCommand('MOVE')
    robot.executeCommand('MOVE')
    robot.executeCommand('MOVE')
    robot.executeCommand('MOVE')
    assert.strictEqual('0, 4 WEST', robot.getPosition())
  })
  it ('Place invalid coordinates', () => {
    // Good to reset the robot
    robot.reset()
    robot.executeCommand('PLACE 5,0,NORTH')
    assert.strictEqual(null, robot.getPosition())
  })
  it ('Place in a blocked coordinate', () => {
    // Good to reset the robot
    robot.reset()
    robot.executeCommand('PLACE 1,1,NORTH')
    assert.strictEqual(null, robot.getPosition())
  })
})