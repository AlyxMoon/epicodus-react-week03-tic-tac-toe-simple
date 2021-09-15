import { Action, Reducer } from 'redux'
import { AppThunkAction } from '../'
import getWinnerOfBoard from '../../lib/getWinnerOfBoard'

const playerMarkMap: {
  [key: number]: 'X' | 'O'
} = {
  1: 'X',
  2: 'O',
}

const togglePlayerMap: {
  [key: number]: 1 | 2,
} = {
  1: 2,
  2: 1,
}

export type PossibleCells = '' | 'X' | 'O'
export type Board = PossibleCells[]

export interface State {
  board: Board,
  activePlayer: 1 | 2,
  winner: 0 | 1 | 2,
}

const unloadedState: State = {
  board: ['', '', '', '', '', '', '', '', ''],
  activePlayer: 1,
  winner: 0,
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

interface ActionSetWinner {
  type: 'SET_WINNER',
  player: 1 | 2,
}

type KnownActions = ActionResetGame | ActionMarkCell | ActionSetPlayer | ActionSetWinner

export const actionCreators = {
  resetGame: (): AppThunkAction<KnownActions> => (dispatch, getState): void => {
    dispatch({ type: 'RESET_GAME' })
  },
  markCell: (cellIndex: number): AppThunkAction<KnownActions> => (dispatch, getState): void => { 
    if (getState().game.board[cellIndex] !== '') return

    dispatch({ type: 'MARK_CELL', cellIndex })

    const winner = getWinnerOfBoard(getState().game.board)
    console.log('have they won?!', winner)

    // const winner = getWinnerOfBoard(getState().game.board)

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
    case 'SET_WINNER':
      return {
        ...state,
        winner: action.player,
      }
  }

  return state
}
