import React from "react";



function NavBar ({pokemonList, onPokemonSelect}) {
const handlePokemonClick = (index) => {
  if (pokemonList[index].name === "pikachu") {
    alert("pika pilachu !!!")
  }
  onPokemonSelect(index);
}




    return (
        <nav>
          {pokemonList.map((pokemon, index) => (
            <button key={pokemon.name} onClick={() =>  handlePokemonClick(index)}>
              {pokemon.name}
            </button>
          ))}
        </nav>
      );
    }

export default NavBar;