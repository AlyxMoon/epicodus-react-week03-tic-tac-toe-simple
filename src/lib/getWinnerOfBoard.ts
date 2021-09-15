import { Board, PossibleCells } from '../store/modules/game'

const getIndexFromRowCol = (row: number, col: number): number => {
  return (row * 3) + col
}

const getWinnerOfBoard = (board: Board): PossibleCells => {
  for (let col = 0; col < 3; col++) {
    let countX = 0
    let countO = 0

    for (let row = 0; row < 3; row++) {
      const cell = board[getIndexFromRowCol(row, col)]
      if (cell === 'X') countX++
      if (cell === 'O') countO++
    }
  
    if (countX === 3) return 'X'
    if (countO === 3) return 'O'
  }

  for (let row = 0; row < 3; row++) {
    let countX = 0
    let countO = 0

    for (let col = 0; col < 3; col++) {
      const cell = board[getIndexFromRowCol(row, col)]
      if (cell === 'X') countX++
      if (cell === 'O') countO++
    }
  
    if (countX === 3) return 'X'
    if (countO === 3) return 'O'
  }

  let countX = 0
  let countO = 0
  for (let col = 0, row = 0; col < 3 && row < 3; col++, row++) {
    const cell = board[getIndexFromRowCol(row, col)]
    if (cell === 'X') countX++
    if (cell === 'O') countO++
  }

  if (countX === 3) return 'X'
  if (countO === 3) return 'O'

  let countX2 = 0
  let countO2 = 0
  for (let col = 2, row = 0; col >= 0 && row < 3; col--, row++) {
    const cell = board[getIndexFromRowCol(row, col)]
    if (cell === 'X') countX2++
    if (cell === 'O') countO2++
  }
  
  if (countX2 === 3) return 'X'
  if (countO2 === 3) return 'O'

  return ''
}


export default getWinnerOfBoard
