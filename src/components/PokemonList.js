import React from 'react'
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native'

import { PokemonCard } from './PokemonCard'

export function PokemonList(props) {
    const { pokemons, loadPokemons } = props
    const loadMore = () => {
        console.log('load more')
        loadPokemons()
    }

    return (
        <FlatList 
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            showHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.order}
            renderItem={({ item }) => (
                <PokemonCard
                    pokemon={item}
                    onPress={() => props.onPress(item)}
                />
            )}
            contentContainerStyle={styles.container}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={() => (
                <ActivityIndicator 
                    size="large" 
                    color="#0000ff"
                    style={styles.spinner}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 20,
    }
});
