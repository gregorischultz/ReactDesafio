import { useState } from 'react'
import './App.css'
import React, {useEffect} from 'react';
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
useEffect (() => {
  alert("hello pokemon trainer ;)");
}, []);


  const [pokemonIndex, setpokemonIndex] = useState(0);
  
  const pokemonPrecedent = () => {
    setpokemonIndex (prevIndex => prevIndex > 0 ? prevIndex - 1 : pokemonList.length - 1);
  }

  const pokemonSuivant = () => {
    setpokemonIndex (prevIndex => prevIndex < pokemonList.length - 1 ? prevIndex + 1 : 0);
  }
const selectedPokemon = pokemonList[pokemonIndex];

const handlePokemonSelect = (index) => {
  setpokemonIndex(index);
};
  return (
    <div>
      <NavBar pokemonList={pokemonList} onPokemonSelect={handlePokemonSelect}/>
      <PokemonCard pokemon={selectedPokemon}/>
    </div>
  );
  
}

export default App
