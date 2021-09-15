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

interface ActionMarkCell {
  type: 'MARK_CELL',
  cellIndex: number,
}

type KnownActions = ActionResetGame | ActionMarkCell

export const actionCreators = {
  resetGame: (): AppThunkAction<KnownActions> => (dispatch, getState): void => {
    dispatch({ type: 'RESET_GAME' })
  },
  markCell: (cellIndex: number): AppThunkAction<KnownActions> => (dispatch, getState): void => {
    dispatch({ type: 'MARK_CELL', cellIndex })
  },
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
    case 'MARK_CELL':
      return {
        ...state,
        board: state.board.map((cell, index) => {
          if (index !== action.cellIndex) return cell
          return 'O'
        })
      }
  }

  return state
}
