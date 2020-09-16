import React from 'react';
import App from './App';
import { Robot } from './modules/robot'
const DIMENSION_X = 5
const DIMENSION_Y = 5

const robot: Robot = Robot.createInstance(DIMENSION_X, DIMENSION_Y)
test ('Place SOUTH-WEST, facing east, moved 2 tiles', () => {
  // Good to reset the robot
  robot.reset()
  robot.executeCommand('PLACE 0,0,EAST')
  robot.executeCommand('MOVE')
  robot.executeCommand('MOVE')
  expect(`2, 0 EAST`).toStrictEqual(robot.getPosition())
})
test ('Place NORTH-WEST, facing east, moved 2 tiles', () => {
  // Good to reset the robot
  robot.reset()
  robot.executeCommand('PLACE 0,4,EAST')
  robot.executeCommand('MOVE')
  robot.executeCommand('MOVE')
  expect(`2, 4 EAST`).toStrictEqual(robot.getPosition())
})
test ('Place SOUTH-WEST, facing east, turn left', () => {
  // Good to reset the robot
  robot.reset()
  robot.executeCommand('PLACE 0,0,EAST')
  robot.executeCommand('LEFT')
  expect(`0, 0 NORTH`).toStrictEqual(robot.getPosition())
})
test ('Place SOUTH-WEST, facing NORTH, turn left', () => {
  // Good to reset the robot
  robot.reset()
  robot.executeCommand('PLACE 0,0,NORTH')
  robot.executeCommand('LEFT')
  expect(`0, 0 WEST`).toStrictEqual(robot.getPosition())
})
test ('Place SOUTH-WEST, facing east, turn right', () => {
  // Good to reset the robot
  robot.reset()
  robot.executeCommand('PLACE 0,0,EAST')
  robot.executeCommand('RIGHT')
  expect(`0, 0 SOUTH`).toStrictEqual(robot.getPosition())
})
test ('Place SOUTH-WEST, facing NORTH, turn right', () => {
  // Good to reset the robot
  robot.reset()
  robot.executeCommand('PLACE 0,0,NORTH')
  robot.executeCommand('RIGHT')
  expect(`0, 0 EAST`).toStrictEqual(robot.getPosition())
})
test ('Place NORTH-EAST, facing EAST, move 1', () => {
  // Good to reset the robot
  robot.reset()
  robot.executeCommand('PLACE 4,4,EAST')
  robot.executeCommand('MOVE')
  expect('4, 4 EAST').toStrictEqual(robot.getPosition())
})
test ('Place NORTH-EAST, facing EAST, turn left twice, move 5', () => {
  // Good to reset the robot
  robot.reset()
  robot.executeCommand('PLACE 4,4,EAST')
  robot.executeCommand('LEFT')
  robot.executeCommand('LEFT')
  robot.executeCommand('MOVE')
  robot.executeCommand('MOVE')
  robot.executeCommand('MOVE')
  robot.executeCommand('MOVE')
  robot.executeCommand('MOVE')
  expect('0, 4 WEST').toStrictEqual(robot.getPosition())
})
test ('Place invalid coordinates', () => {
  // Good to reset the robot
  robot.reset()
  robot.executeCommand('PLACE 5,0,NORTH')
  expect(null).toStrictEqual(robot.getPosition())
})
