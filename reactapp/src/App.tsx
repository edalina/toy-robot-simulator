import React, { useState } from 'react';
import './App.css';
import { Robot } from './modules/robot'

const TABLE_SIZE_X = 5, TABLE_SIZE_Y = 5
const robot: Robot = Robot.createInstance(TABLE_SIZE_X, TABLE_SIZE_Y)

function App() {
  const [render, setRender] = useState(1)
  const [place, setPlace] = useState('')

  const generateRobot = () => {
    return (
      <i className={'fas fa-robot ' + robot.getDirection().toLocaleLowerCase()} id='robot'></i>
    )
  }

  const executeCommand = (command: string = '') => {
    robot.executeCommand(command)
    setRender(render + 1)
  }

  const generateTable = () => {
    const rows = []
    for (let rIndex = TABLE_SIZE_Y - 1 ; rIndex >= 0 ; rIndex--) {
      const columns = []
      for (let cIndex = 0 ; cIndex < TABLE_SIZE_X ; cIndex++) {
        columns.push((<td className='tableData'><span className='tablePlaceholder'>{cIndex}, {rIndex}</span>{ rIndex === robot.getY() && cIndex === robot.getX() ? generateRobot() : null }</td>))
      }
      rows.push((<tr className='tableRow'>
        { columns }
      </tr>))
    }
    return (
    <div>
      <div style={{ textAlign: 'center' }}>North</div>
      <div>
        <table id='tableTop'>
          <tbody>
            { rows }
          </tbody>
        </table>
      </div>
      <div style={{ textAlign: 'center' }}>South</div>
    </div>)
  }

  return (
    <div className='App'>
      <div id='container'>
        { generateTable() }
        <div className='actionHolder'>
          <input className='placeText' type='text' placeholder="e.g. 0,0,NORTH" onInput={(e) => { setPlace(e.currentTarget.value.toUpperCase()) }} />
          <button className='actionButtons' onClick={() => { executeCommand(`PLACE ${place}`) }}>Place</button>
        </div>
        <div className='actionHolder'>
          <button className='actionButtons' onClick={() => { executeCommand('left') }}>Left</button>
          <button className='actionButtons' onClick={() => { executeCommand('move') }}>Move</button>
          <button className='actionButtons' onClick={() => { executeCommand('right') }}>Right</button>
        </div>
      </div>
    </div>
  );
}

export default App;
