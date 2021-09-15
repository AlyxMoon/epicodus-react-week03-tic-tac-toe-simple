import { Action, Reducer } from 'redux'
import { AppThunkAction } from '../'

export interface State {
  board: string[]
}

const unloadedState = {
  board: ['', '', '', '', '', '', '', '', '']
}

interface ActionResetGame {
  type: 'RESET_GAME',
}

interface MyOtherAction {
  type: 'SOMETHING_ELSE'
}

type KnownActions = ActionResetGame | MyOtherAction

export const actionCreators = {
  resetGame: (): AppThunkAction<KnownActions> => (dispatch, getState): void => {
    dispatch({ type: 'RESET_GAME' })
  }
}

export const reducer: Reducer<State> = (
  state: State | undefined,
  incomingAction: Action,
): State => {
  if (!state) return unloadedState
  const action = incomingAction as KnownActions

  switch (action.type) {
    case 'RESET_GAME':
      return unloadedState
  }

  return state
}
