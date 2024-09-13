
import usePokemonList from '../../hooks/usePokemonList';
import Pokemon from '../Pokemon/Pokemon';
import './PokemonList.css'

function PokemonList(){
     
    const [pokemonListState,setPokemonListState]=usePokemonList(false);
    
    return (
        <div className='pokemon-list-wrapper'>
           <div className="pokemon-wrapper">
           {(pokemonListState.isLoading)?'Loading...':pokemonListState.pokemonList.map((p)=> <Pokemon name={p.name} image={p.image} id={p.id} key={p.id}/>)
            }
           </div>
           <div className='controls'>
            <button disabled={pokemonListState.prevUrl == null} onClick={()=>
                setPokemonListState({...pokemonListState,pokedexUrl:pokemonListState.prevUrl})
                }>Prev</button>
            <button disabled={pokemonListState.nextUrl == null}  onClick={()=>
                setPokemonListState({...pokemonListState,pokedexUrl:pokemonListState.nextUrl})
                }>Next</button>
           </div>
        </div>
    )
}
export default PokemonList;