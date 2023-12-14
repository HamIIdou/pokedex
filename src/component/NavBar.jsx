function NavBar ({setPokemonIndex, pokemonIndex, pokemonList}) 



{
    const HandleClick = (count) => {
        setPokemonIndex(count)
    }


    return (
    <div>
        {pokemonList.map((article,index) => (
            <button key={article.name} onClick ={()=> HandleClick(index)} > {article.name} </button>
            
        ))}
    </div>
    )
}
export default NavBar