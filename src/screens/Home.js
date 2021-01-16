import React, { Component } from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import Curso from '../components/Curso'

const mockCursos = [
    {
        id: 1,
        title: 'Computação',
        desc: 'Curso de Computação',
        company: 'CCR',
        registered: false
    },
    {
        id: 2,
        title: 'Biologia',
        desc: 'Curso de Computação',
        company: 'CCR',
        registered: false
    },
    {
        id: 3,
        title: 'Engenharia',
        desc: 'Curso de Computação',
        company: 'CCR',
        registered: false
    },
    {
        id: 4,
        title: 'Computação',
        desc: 'Curso de Computação',
        company: 'CCR',
        registered: false
    },
    {
        id: 5,
        title: 'Computação',
        desc: 'Curso de Computação',
        company: 'CCR',
        registered: false
    },
]

export default class Home extends Component {

    state = {
        cursos: mockCursos
    }

    onRegister = (id) => {
        const cursoIndex = this.state.cursos.findIndex(element => element.id == id)
        let newArray = [...this.state.cursos]
        newArray[cursoIndex] = {...newArray[cursoIndex], registered: !newArray[cursoIndex].registered}
        this.setState( {cursos: newArray} )
    }


    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}></View>
                <View style={styles.body}>
                    <FlatList data={this.state.cursos}
                        keyExtractor={item => `${item.id}`} 
                        renderItem={({item, index}) => <Curso {...item} onPress={() => this.onRegister(item.id)} />} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 2,
    },
    body: {
        flex: 8,
        margin: 10,
    }
})