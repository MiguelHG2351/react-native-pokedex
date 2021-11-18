import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { getPokemonAPI, getPokemonDetailsByURL} from '../api/pokemon'

import { PokemonList } from '../components/PokemonList'

export  function Pokedex() {
    const [pokemons, setPokemons] = useState([])
    const [ nextUrl, setNextUrl] = useState(null)
    
    useEffect(() => {
        (async() =>  {
            try {
                await loadPokemons()
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    const loadPokemons = async () => {
        try {
            const response = await getPokemonAPI(nextUrl)
            setNextUrl(response.next)
            const pokemonsArray = []
            for await(const pokemon of response.results) {
                const pokemonDetails = await getPokemonDetailsByURL(pokemon.url)
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    // original image front default
                    image: pokemonDetails.sprites.other['official-artwork'].front_default
                })
            }
            setPokemons([...pokemons, ...pokemonsArray])
        } catch(err) {
            console.error('F')
        }
    }
    
    return (
        <SafeAreaView>
            <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} />
        </SafeAreaView>
    )
}
