import React, {PureComponent} from 'react'
import styled, {injectGlobal} from 'styled-components'

injectGlobal`
  body {
    font-family: monospace;
    font-size: 16px;
  }
`

const Container = styled.div`
  position: relative;
  display: inline-block;
`

const EndOfGame = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 68px;
  cursor: pointer;
`

const Table = styled.table`
  border-spacing: 0;
  border: 1px solid;
`

const Cell = styled.td`
  width: 25px;
  height: 25px;
  line-height: 25px;
  border: 1px solid;
  cursor: pointer;
  text-align: center;
`

const SIZE = 10
const WINNER_SCORE = 5

const pass = (a) => a

const increase = (a, b) => a + b

const decrease = (a, b) => a - b

const isInRange = (x, a, b) => x >= a === x <= b

class Game extends PureComponent {
  state = {
    move: 'x',
    points: [],
    winner: null
  }

  checkDirection = (move, points, y, x) => (total, ycalculation, xcalculation) => {
    for (let i = 1; i <= WINNER_SCORE; i++) {
      const yvalue = ycalculation(y, i)
      const xvalue = xcalculation(x, i)

      if (
        isInRange(xvalue, 0, SIZE - 1) && isInRange(yvalue, 0, SIZE - 1) &&
        points[yvalue][xvalue] && points[yvalue][xvalue] === move
      ) {
        total++
      } else {
        break
      }
    }

    return total
  }

  makeCalculation = (algorithm, functionsXY, functionsYX) => {
    let total = 1
    total = algorithm(total, functionsXY[0], functionsXY[1])
    total = algorithm(total, functionsYX[0], functionsYX[1])

    return total
  }

  checkHorizontal = (algorithm) => this.makeCalculation(algorithm, [pass, increase], [pass, decrease])

  checkVertical = (algorithm) => this.makeCalculation(algorithm, [decrease, pass], [increase, pass])

  checkDiagonalAC = (algorithm) => this.makeCalculation(algorithm, [increase, increase], [decrease, decrease])

  checkDiagonalBD = (algorithm) => this.makeCalculation(algorithm, [increase, decrease], [decrease, increase])

  checkScore = (move, points, y, x) => {
    const algorithm = this.checkDirection(move, points, y, x)

    return (
      this.checkHorizontal(algorithm) >= WINNER_SCORE ||
      this.checkVertical(algorithm) >= WINNER_SCORE ||
      this.checkDiagonalAC(algorithm) >= WINNER_SCORE ||
      this.checkDiagonalBD(algorithm) >= WINNER_SCORE
    )
  }

  handleClickCell = (y, x) => {
    const {
      state: {
        points,
        move
      }
    } = this

    if (!points[y][x]) {
      this.state.points[y][x] = move

      const winner = this.checkScore(move, points, y, x)
      if (winner) {
        this.state.winner = move
      } else {
        this.state.move = move === 'x' ? 'o' : 'x'
      }

      this.forceUpdate()
    }
  }

  generatePlayground = () => {
    const rows = []
    for (let y = 0; y < SIZE; y++) {
      const cells = []
      for (let x = 0; x < SIZE; x++) {
        cells.push(null)
      }
      rows.push(cells)
    }

    return rows
  }

  resetGame = () => {
    const points = this.generatePlayground()
    this.setState({points, winner: null})
  }

  componentWillMount () {
    const points = this.generatePlayground()
    this.setState({points})
  }

  render () {
    const {
      state: {
        points,
        move,
        winner
      }
    } = this

    const table = points.map((row, y) =>
      <tr key={y}>
        {
          row.map((cell, x) =>
            <Cell key={x} onClick={() => this.handleClickCell(y, x)}>{cell}</Cell>
          )
        }
      </tr>
    )

    return (
      <div>
        <Container>
          { winner && <EndOfGame onClick={() => this.resetGame()}><strong>{winner}</strong></EndOfGame>}
          <Table>
            {table}
          </Table>
        </Container>
        <div><strong>{move}</strong></div>
      </div>
    )
  }
}

export default Game
