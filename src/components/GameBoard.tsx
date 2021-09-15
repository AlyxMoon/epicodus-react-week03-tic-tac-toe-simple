import { FunctionComponent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { ApplicationState } from '../store/index'

import './GameBoard.scss'

const GameBoard: FunctionComponent<PropsFromRedux> = ({ board }) => {
  return (
    <div className="game-board">
      {board.map((cell, i) => (
        <div 
          className="cell"
          key={i}
        >{cell}</div>
      ))}
    </div>
  )
}

const connector = connect(
  (state: ApplicationState) => ({
    board: state.game.board,
  }),
)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(GameBoard)
