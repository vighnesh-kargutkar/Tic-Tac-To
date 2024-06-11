export default function Log({ turns}){
    return(
        <>
            <ol id='log'>
            {turns.map((trun)=> <li key={`${trun.square.row}${trun.square.col}}`}>{trun.player} selecte {trun.square.row} , {trun.square.col}</li>)}
            </ol>
        </>
    )
}