import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Tela2 extends Component {


    render() {
        return(
            <View style={styles.background}>
                <Text>Tela 2</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})