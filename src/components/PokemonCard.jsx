import React from "react";





function PokemonCard (props){
    console.log(props);
    
    const pokemon = props.pokemon;
    const {name, imgSrc} = pokemon
    return (
        <div>
            <h2>{name}</h2>
            {imgSrc ? (
                <img src = {imgSrc} alt = {name}/>)
                : (<p>???</p>)
            }
        </div>);
         
}

export default PokemonCard;