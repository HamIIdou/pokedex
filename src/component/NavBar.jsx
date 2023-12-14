function NavBar ({setPokemonIndex, pokemonIndex, pokemonList}) {
    
    const handleClickNext = () => {
      setPokemonIndex(pokemonIndex+1)
    }
    const handleClickBefore = () => {
      setPokemonIndex(pokemonIndex-1)
    }
    return (
    <>
        {pokemonIndex>0 && <button onClick={handleClickBefore}>Précédent</button>}
        {pokemonIndex< pokemonList.length-1 && <button onClick={handleClickNext}>Suivant</button>}
    </>
    )
}
export default NavBar