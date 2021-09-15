import { Board } from '../store/modules/game'
import getWinnerOfBoard from './getWinnerOfBoard'

describe('getWinnerOfBoard()', () => {
  it('returns "" for an empty board', () => {
    const board: Board = ['', '', '', '', '', '', '', '', '']
    expect(getWinnerOfBoard(board)).toEqual('')
  })

  it('returns "" for non-winning boards', () => {
    const board: Board = ['X', 'O', 'O', 'X', 'O', '', '', '', '']
    expect(getWinnerOfBoard(board)).toEqual('')
  })

  it('returns correctly for vertical wins', () => {
    const board1: Board = ['X', '', '', 'X', '', '', 'X', '', '']
    const board2: Board = ['', '', 'X', '', '', 'X', '', '', 'X']
    const board3: Board = ['O', '', '', 'O', '', '', 'O', '', '']
    const board4: Board = ['', 'O', '', '', 'O', '', '', 'O', '']

    expect(getWinnerOfBoard(board1)).toEqual('X')
    expect(getWinnerOfBoard(board2)).toEqual('X')
    expect(getWinnerOfBoard(board3)).toEqual('O')
    expect(getWinnerOfBoard(board4)).toEqual('O')
  })

  it('returns correctly for horizontal wins', () => {
    const board1: Board = ['X', 'X', 'X', '', '', '', '', '', '']
    const board2: Board = ['', '', '', 'X', 'X', 'X', '', '', '']
    const board3: Board = ['', '', '', 'O', 'O', 'O', '', '', '']
    const board4: Board = ['', '', '', '', '', '', 'O', 'O', 'O']

    expect(getWinnerOfBoard(board1)).toEqual('X')
    expect(getWinnerOfBoard(board2)).toEqual('X')
    expect(getWinnerOfBoard(board3)).toEqual('O')
    expect(getWinnerOfBoard(board4)).toEqual('O')
  })

  it('returns correctly for diagonal wins', () => {
    const board1: Board = ['X', '', '', '', 'X', '', '', '', 'X']
    const board2: Board = ['', '', 'O', '', 'O', '', 'O', '', '']

    expect(getWinnerOfBoard(board1)).toEqual('X')
    expect(getWinnerOfBoard(board2)).toEqual('O')
  })
})
