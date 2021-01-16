import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AuthInput from '../components/AuthInput'

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
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
                    <AuthInput icon='user' style={styles.input} placeholder='Nome'
                        value={this.state.name} onChangeText={name => this.setState({ name })}/> 
                }
                {this.state.stageNew && 
                    <AuthInput selectInput={true} selectedValue={this.state.userType} onValueChange={ userType => this.setState({ userType })}
                        icon='user' style={styles.input} placeholder='Tipo de usuario' /> 
                }
                <AuthInput icon='at' style={styles.input} placeholder='E-mail'
                    value={this.state.email} onChangeText={email => this.setState({ email })}/>
                <AuthInput icon='lock' style={styles.input} placeholder='Senha'
                    value={this.state.password} onChangeText={password => this.setState({ password })}/>
                {this.state.stageNew && 
                    <AuthInput icon='asterisk' style={styles.input} placeholder='Confirma Senha'
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
        borderRadius: 7,
        padding: 10,
    },
    buttonText: {
        color: 'blue',
    }
})