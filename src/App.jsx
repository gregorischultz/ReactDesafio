import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
      name: "mew",
  }
]

function App() {
  const selectedPokemon = pokemonList[0];
  return (
    <div>
      <PokemonCard pokemon={selectedPokemon}/>
    </div>
  )
  
}

export default App
