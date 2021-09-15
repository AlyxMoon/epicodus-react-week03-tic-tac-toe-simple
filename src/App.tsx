import { FunctionComponent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { ApplicationState } from './store/index'

import GameBoard from './components/GameBoard'

const App: FunctionComponent<PropsFromRedux> = ({ activePlayer }) => {
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

      <GameBoard />
    </div>
  )
}

const connector = connect(
  (state: ApplicationState) => ({
    activePlayer: state.game.activePlayer,
  }),
)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App)
