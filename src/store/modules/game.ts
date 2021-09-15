import { Action, Reducer } from 'redux'
import { AppThunkAction } from '../'

const playerMarkMap = {
  1: 'X',
  2: 'O',
}

export interface State {
  board: string[]
  activePlayer: 1 | 2
}

const unloadedState: State = {
  board: ['', '', '', '', '', '', '', '', ''],
  activePlayer: 1,
}

interface ActionResetGame {
  type: 'RESET_GAME',
}

interface ActionMarkCell {
  type: 'MARK_CELL',
  cellIndex: number,
}

interface ActionSetPlayer {
  type: 'SET_PLAYER',
  player: 1 | 2,
}

type KnownActions = ActionResetGame | ActionMarkCell | ActionSetPlayer

export const actionCreators = {
  resetGame: (): AppThunkAction<KnownActions> => (dispatch, getState): void => {
    dispatch({ type: 'RESET_GAME' })
  },
  markCell: (cellIndex: number): AppThunkAction<KnownActions> => (dispatch, getState): void => {
    const { board } = getState().game
    if (board[cellIndex] !== '') return

    dispatch({ type: 'MARK_CELL', cellIndex })

    const togglePlayerMap: {
      [key: number]: 1 | 2,
    } = {
      1: 2,
      2: 1,
    }

    dispatch({
      type: 'SET_PLAYER',
      player: togglePlayerMap[getState().game.activePlayer]
    })
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
          return playerMarkMap[state.activePlayer]
        })
      }
    case 'SET_PLAYER':
      return {
        ...state,
        activePlayer: action.player,
      }
  }

  return state
}
