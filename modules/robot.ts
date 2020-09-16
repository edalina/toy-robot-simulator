class Robot {
  private readonly DIMENSION_X = 5
  private readonly DIMENSION_Y = 5
  private readonly PLACE_REGEX = new RegExp(`^PLACE ([0-${this.DIMENSION_X - 1}]),\\s{0,1}([0-${this.DIMENSION_Y - 1}]),\\s{0,1}(NORTH|SOUTH|EAST|WEST)$`, 'i')
  
  private isPlaced!: false | boolean
  private x!: 0 | number
  private y!: 0 | number
  private direction!: '' | string

  private constructor () {}

  private moveRobot () {
    this.direction = this.direction.toUpperCase()
    if (this.direction === 'NORTH') this.y++
    else if (this.direction === 'SOUTH') this.y--
    else if (this.direction === 'EAST') this.x++
    else if (this.direction === 'WEST') this.x--

    
    if (this.x < 0) this.x = 0
    else if (this.x >= this.DIMENSION_X) this.x = this.DIMENSION_X - 1
    if (this.y < 0) this.y = 0
    else if (this.y >= this.DIMENSION_Y) this.y = this.DIMENSION_Y - 1
  }

  private turnLeft () {
    if (this.direction === 'NORTH') this.direction = 'WEST'
    else if (this.direction === 'SOUTH') this.direction = 'EAST'
    else if (this.direction === 'EAST') this.direction = 'NORTH'
    else if (this.direction === 'WEST') this.direction = 'SOUTH'
  }

  private turnRight () {
    if (this.direction === 'NORTH') this.direction = 'EAST'
    else if (this.direction === 'SOUTH') this.direction = 'WEST'
    else if (this.direction === 'EAST') this.direction = 'SOUTH'
    else if (this.direction === 'WEST')this.direction = 'NORTH'
  }

  public executeCommand (command: '' | string) {
    command = command.trim().toUpperCase()
    
    const matches = command.match(this.PLACE_REGEX)
    if (matches) {
      const placeX = parseInt(matches[1]) // X coordinate
      const placeY = parseInt(matches[2]) // Y coordinate
      const placeDirection = matches[3] // Direction

      this.x = placeX
      this.y = placeY
      this.direction = placeDirection.toUpperCase()
      this.isPlaced = true
    } else {
      if (this.isPlaced) {
        switch (command) {
          case 'MOVE': this.moveRobot()
            break
          case 'LEFT': this.turnLeft()
            break
          case 'RIGHT': this.turnRight()
            break
          case 'REPORT': 
            console.log(`Output: ${this.getPosition()}`)
            break
          default:
            // Do nothing
        }
      }
    }
  }

  public getPosition () {
    return this.isPlaced ? `${this.x}, ${this.y} ${this.direction}` : null
  }

  public reset () {
    this.isPlaced = false
    this.x = 0
    this.y = 0
    this.direction = ''
  }

  public static createInstance () {
    return new Robot()
  }
}

export { Robot }