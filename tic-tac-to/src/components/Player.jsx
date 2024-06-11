import { useState } from "react"
export default function Player({initialname,symbol,isActive,onChaneName}){
    const [ playerName, setPlayerName] = useState(initialname)
    const [ isEditing, setIsEditing] = useState(false)
    function handleClick(){
        setIsEditing((editing)=> !editing)
        if(isEditing){
            onChaneName(symbol,playerName)
        }
    }
    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value)
    }
    let editableplayerName = ( <span className="player-name">{playerName}</span>)
    if(isEditing){
        editableplayerName = (<input type="text" required value={playerName} onChange={handleChange}></input>)
    }

    return(
        <>
        <li className={isActive ? 'active': undefined}>
            <span className="player">
              {editableplayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
        </>
    )
}