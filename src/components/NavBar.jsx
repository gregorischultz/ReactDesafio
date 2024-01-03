import React from "react";



function NavBar ({pokemonList, onPokemonSelect}) {
    return (
        <nav>
          {pokemonList.map((pokemon, index) => (
            <button key={pokemon.name} onClick={() => onPokemonSelect(index)}>
              {pokemon.name}
            </button>
          ))}
        </nav>
      );
    }

export default NavBar;