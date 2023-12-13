import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './component/PokemonCard'
import PropTypes from "prop-types";

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
PokemonCard.propTypes = {
  pokemon : PropTypes.shape({
      name : PropTypes.string.isRequired,
      imgSrc: PropTypes.string
  })

}
function App() {
  

  return (
   <PokemonCard pokemon={pokemonList[0]} />
  )
}

export default App
