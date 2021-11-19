import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import getColorPokemon from '../utils/getColorPokemon'
import { capitalize } from 'lodash'
import { useNavigation } from '@react-navigation/native'

export function PokemonCard({ pokemon }) {
    const navigation = useNavigation()

    const goTo = () => {
        navigation.navigate('Pokemon', { id: pokemon.id })
    }

    const pokemonColor = getColorPokemon(pokemon.type)
    const bgStyle = {
        backgroundColor: pokemonColor,
        ...styles.bgStyles
    }

    return (
        <TouchableWithoutFeedback onPress={goTo}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyle}>
                        <Text style={styles.number}>
                            #{`${pokemon.order}`.padStart(3, '0')}
                        </Text>
                        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                        <Image 
                            source={{
                                uri: pokemon.image
                            }} 
                            style={styles.image}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    number: {
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11,
      },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10,
      },
    image: {
        position: 'absolute',
        right: 2,
        bottom: 2,
        width: 90,
        height: 90,
    }
})
