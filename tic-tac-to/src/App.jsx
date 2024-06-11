import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function derivedPlayer(gameTurn){
  let currentPlayer = 'X'
  if(gameTurn.length > 0 && gameTurn[0].player === 'X'){
    currentPlayer = "O"
  }
  return currentPlayer   
}

function derivedWinner(gameBoard,players){
  let winner=''
  for (const conbination of WINNING_COMBINATIONS){
    const firstsquare = gameBoard[conbination[0].row][conbination[0].column]
    const secondsquare = gameBoard[conbination[1].row][conbination[1].column]
    const thurdsquare = gameBoard[conbination[2].row][conbination[2].column]
    
    if(firstsquare && firstsquare === secondsquare && firstsquare === thurdsquare){
      winner=players[firstsquare]
      console.log(winner,firstsquare);
    }
  } 
  return winner
}

function derivedgameboard(gameTurn){
  let gameBoard = [...initialGameBoard.map((item)=>[...item])]
  for(const trun of gameTurn){
    const { square , player } = trun
    const { row , col } = square
    gameBoard[row][col] = player
    }
  return gameBoard
}

function App() {
  const [ players , setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2',
  })
  const  [ gameTurn , setGameTurn] = useState([])

  const activePlayer = derivedPlayer(gameTurn)
  const gameBoard= derivedgameboard(gameTurn)
  const winner=derivedWinner(gameBoard,players)
  const hasdraw = gameTurn.length === 9 && !winner
  function handleSelectedSquare(rowIndex,columIndex){
  
    setGameTurn((prevturn)=>{
      const currentPlayer =derivedPlayer(prevturn)
      const updatedturn = [
        { square: { row : rowIndex , col : columIndex} ,
          player : currentPlayer
        },
        ...prevturn,
      ]
      return updatedturn
    })
  }
  function handleReset(){
    setGameTurn([])
  }
  function handleplayername(symbol,newname){
    setPlayers((prevplayer)=> {
      return {
        ...prevplayer,
       [symbol]:newname
      }
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialname="Player 1" symbol='X' isActive={activePlayer === 'X'} onChaneName={handleplayername}/>
          <Player initialname="Player 2" symbol='O' isActive={activePlayer === "O"} onChaneName={handleplayername}/>
        </ol>
        {(winner || hasdraw )&& <GameOver winner={winner} onRestart={handleReset}/>}
        <GameBoard 
        onselectSquare={handleSelectedSquare}  
        board ={gameBoard}/>
      </div>
        <Log  turns ={gameTurn}/>
    </main>
  )
}

export default App
