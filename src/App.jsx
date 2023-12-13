import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './component/PokemonCard';

function App() {
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
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex+1)
  }
  const handleClickBefore = () => {
    setPokemonIndex(pokemonIndex-1)
  }
  return (
    <div>
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    {pokemonIndex>0 && <button onClick={handleClickBefore}>Précédent</button>}
    {pokemonIndex< pokemonList.length-1 && <button onClick={handleClickNext}>Suivant</button>}
    </div>
  )
}

export default App
