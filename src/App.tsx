import { FunctionComponent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { ApplicationState, gameModule } from './store/index'

import GameBoard from './components/GameBoard'

const App: FunctionComponent<PropsFromRedux> = ({ activePlayer, winner, restartGame }) => {
  const getActivePlayerLetter = () => {
    return activePlayer === 1 ? 'X' : 'O'
  }

  return (
    <div className="app">
      <h1>Hello World</h1>

      <dl>
        <dt>Current Player:</dt>
        <dd>{activePlayer} ({getActivePlayerLetter()})</dd>
      </dl>

      {!winner ? '' : (
        <div className="winner-indicator">
          <h1>Player {winner} has won!</h1>
          
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}

      <GameBoard />
    </div>
  )
}

const connector = connect(
  (state: ApplicationState) => ({
    activePlayer: state.game.activePlayer,
    winner: state.game.winner,
  }),
  {
    restartGame: gameModule.actionCreators.resetGame,
  }
)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App)
