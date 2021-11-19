import React, { useState, useEffect } from 'react'
import { ScrollView, Text } from 'react-native'
import { getPokemonDetailsAPI } from '../api/pokemon'
import Header from '../components/Pokemon/Header'

export function Pokemon(props) {
    const { navigation, route: { params } } = props
    
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await getPokemonDetailsAPI(params.id)
                setPokemon(response)
            } catch (error) {
                navigation.goBack()
            }
        })()
    }, [])

    if(!pokemon) return null
    
    return (
        <ScrollView>
            <Header 
                name={pokemon.name} 
                order={pokemon.order} 
                type={pokemon.types[0].type.name}
                image={pokemon.sprites.other['official-artwork'].front_default} />
        </ScrollView>
    )
}
