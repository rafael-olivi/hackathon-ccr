import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Picker} from '@react-native-picker/picker';

export default props => {

    if (props.selectInput) {
        return (
            <View style={[styles.container, props.style]}>
                <Icon name={props.icon} size={20} style={styles.icon} />
                <Picker {...props} style={styles.selectInput} > 
                    <Picker.Item label="Pessoa Fisica" value="PF" />
                    <Picker.Item label="Pessoa Juridica" value="PJ" />
                </Picker>
            </View>
        )
    } else {
        return (
            <View style={[styles.container, props.style]}>
                <Icon name={props.icon} size={20} style={styles.icon} />
                <TextInput {...props} style={styles.input} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        backgroundColor: '#EEE',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        color: '#333',
        marginLeft: 20
    },
    input: {
        marginLeft: 20,
        width: '70%'
    },
    selectInput: {
        width: '100%',
        height: 40,
        marginLeft: 20,
        borderRadius: 20,
        flexDirection: 'row',
        borderColor: 'white',
        alignItems: 'center'
    }
})