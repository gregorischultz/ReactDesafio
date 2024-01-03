import { useState } from 'react'
import './App.css'
import React from 'react';
import PokemonCard from "./components/PokemonCard";
import NavBar from './components/NavBar';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);
  
  const pokemonPrecedent = () => {
    setpokemonIndex (prevIndex => prevIndex > 0 ? prevIndex - 1 : pokemonList.length - 1);
  }

  const pokemonSuivant = () => {
    setpokemonIndex (prevIndex => prevIndex < pokemonList.length - 1 ? prevIndex + 1 : 0);
  }

  const selectedPokemon = pokemonList[pokemonIndex];
  return (
    <div>
      <NavBar pokemonPrecedent={pokemonPrecedent} pokemonSuivant={pokemonSuivant}/>
      <PokemonCard pokemon={selectedPokemon}/>
    </div>
  );
  
}

export default App
