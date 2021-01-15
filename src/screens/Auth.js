import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false
}

export default class Auth extends Component {

    state = {
        ...initialState
    }

    render() {
        return (
            <View style={styles.background}>
                <Text style={styles.title}>
                    HACKATHON CCR
                </Text>
                <Text style={styles.subtitle}>
                    {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
                </Text>

                {this.state.stageNew && 
                    <TextInput style={styles.input} placeholder='Nome'
                        value={this.state.name} onChangeText={name => this.setState({ name })}/> 
                }
                <TextInput style={styles.input} placeholder='E-mail'
                    value={this.state.email} onChangeText={email => this.setState({ email })}/>
                <TextInput style={styles.input} placeholder='Senha'
                    value={this.state.password} onChangeText={password => this.setState({ password })}/>
                {this.state.stageNew && 
                    <TextInput style={styles.input} placeholder='Confirma password'
                        value={this.state.confirmPassword} onChangeText={confirmPassword => this.setState({ confirmPassword })}/> 
                }

                
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text>
                            {this.state.stageNew ? 'Registrar' : 'Entrar'}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                    <View >
                        <Text style={styles.buttonText}>
                            {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    title: {
        color: 'white',
        fontSize: 30,
        marginTop: 10,
    },
    subtitle: {
        color: 'white',
    },
    input: {
        backgroundColor: 'white',
        width: '70%',
        marginTop: 10
    },
    button: {
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 7
    },
    buttonText: {
        color: 'blue',
    }
})