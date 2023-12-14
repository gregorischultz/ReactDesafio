import React from "react";
import PropTypes from "prop-types"





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
PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name:PropTypes.string.isRequired,
        imgSrc:PropTypes.string,
    }).isRequired
}

export default PokemonCard;