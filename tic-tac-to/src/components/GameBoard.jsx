
export default function GameBoard({onselectSquare,board }) {

    // const [ gameBoard , setgameBoard ] = useState(initialGameBoard)
    // function handleSelectedSquare(rowIndex,colIndex){
    //     setgameBoard((prevGameboard)=>{
    //         const updatedBoard=[...prevGameboard.map((innerArray)=>[...innerArray])]
    //          updatedBoard[rowIndex][colIndex] = isActive
    //          return updatedBoard
    //     })
    //     onselectSquare()
    // }
  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((palyerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={()=>onselectSquare(rowIndex,colIndex)} disabled={palyerSymbol !== null}>{palyerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
