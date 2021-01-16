import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Home extends Component {


    render() {
        return(
            <View style={styles.background}>
                <Text>Tela Principal</Text>
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