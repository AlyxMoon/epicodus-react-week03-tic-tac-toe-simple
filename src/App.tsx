import { FunctionComponent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { ApplicationState } from './store/index'

import GameBoard from './components/GameBoard'

const App: FunctionComponent<PropsFromRedux> = () => {
  return (
    <div className="app">
      <h1>Hello World</h1>

      <GameBoard />
    </div>
  )
}

const connector = connect(
  (state: ApplicationState) => ({
    game: state.game,
  }),
)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App)
