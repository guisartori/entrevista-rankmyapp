import React from 'react'
import './styles.css'


const Character = ({charInfos}) => {
    
    return (
        <div className="char"> 
            <img src={charInfos.image} alt=""/> 
            <div className="char-infos">
                <h2>{charInfos.name}</h2>
                <p>{charInfos.status}</p>
                <p>{charInfos.species}</p>
                <p>{charInfos.location.name}</p> 
            </div>
        </div>
    )
}

export default Character