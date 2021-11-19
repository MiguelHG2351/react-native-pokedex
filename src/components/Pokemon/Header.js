import React from 'react'
import { View, SafeAreaView, Image, Text, StyleSheet } from 'react-native'
import getColorPokemon from '../../utils/getColorPokemon'
import { capitalize } from 'lodash'

export default function Header(props) {
    const { name, order, image, type } = props
    const color = getColorPokemon(type)
    const bgStyle = [{
        backgroundColor: color,
        ...styles.bg
    }]

    console.log(props)
    return (
        <>
            <View style={bgStyle} />
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{capitalize(name)}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
                </View>
                <View style={styles.contentImage}>
                    <Image source={{uri: image}} style={styles.image} />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    bg: {
        position: 'absolute',
        width: '100%',
        height: 400,
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }]
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 27,
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    contentImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30
    },
    order: {
        color: '#fff',
        fontWeight: 'bold',
    }
})
