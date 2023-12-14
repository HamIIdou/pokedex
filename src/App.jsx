import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './component/PokemonCard';
import NavBar from './component/NavBar';



function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const pokemonList = [
    {
      name: 'Bulbasaur',
      imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      name: 'mew',
    },
    {
      name: 'Random',
      imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
    },
  ];

  return (
    <div>
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex}/>
    </div>
  )
}

export default App
