import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {

    

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text>{props.desc}</Text>
            <Text>Empresa: {props.company}</Text>
            <TouchableOpacity onPress={() => props.onPress()}>
                <View style={styles.button}>
                    <Icon name={props.registered ? 'check' : 'times'} size={20} color={props.registered ? 'green' : 'darkred'} />
                    <Text style={{marginLeft: 5}}>
                        {props.registered ? 'Desinscreva-se' : 'Inscreva-se'}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    title: {
        width: '100%',
        alignItems: 'flex-start',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    button: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        marginTop: 10,
        borderRadius: 7,
        padding: 10,
    }
})