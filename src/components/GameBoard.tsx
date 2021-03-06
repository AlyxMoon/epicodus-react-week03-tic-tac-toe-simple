import { FunctionComponent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { ApplicationState, gameModule } from '../store/index'

import './GameBoard.scss'

const GameBoard: FunctionComponent<PropsFromRedux> = ({ board, markCell }) => {
  const generateCellClasses = (cell: string): string => {
    return `cell ${cell === '' ? 'can-click' : ''}`
  }

  return (
    <div className='game-board'>
      {board.map((cell, i) => (
        <div 
          className={generateCellClasses(cell)}
          key={i}
          onClick={() => markCell(i)}
        >{cell}</div>
      ))}
    </div>
  )
}

const connector = connect(
  (state: ApplicationState) => ({
    board: state.game.board,
    player: state.game.activePlayer,
  }),
  gameModule.actionCreators,
)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(GameBoard)
