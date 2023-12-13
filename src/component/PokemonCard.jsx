function PokemonCard (props) {
    console.log(props)
    const {pokemon}=props
    return( <div>
        {props.pokemon.imgSrc ? (<img src={pokemon.imgSrc}/>) : (<p>???</p>)}
        <div>{props.pokemon.name}</div>
    </div>)
}
export default PokemonCard