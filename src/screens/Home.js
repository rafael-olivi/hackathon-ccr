import React, { Component } from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { showSuccess } from '../common'
import Curso from '../components/Curso'

const mockCursos = [
    {
        id: 1,
        title: 'Computação',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
        cursos: mockCursos,
        temp: mockCursos,
        search: null
    }

    onRegisterOrUnregister = (id) => {
        const cursoIndex = this.state.cursos.findIndex(element => element.id == id)
        let newArray = [...this.state.cursos]
        let registerStatus = !newArray[cursoIndex].registered
        newArray[cursoIndex] = {...newArray[cursoIndex], registered: registerStatus}
        this.setState( {cursos: newArray} )
        showSuccess(registerStatus ? "Inscrição realizada!" : "Desinscrito com sucesso")
    }

    renderHeader = () => {
        return <SearchBar placeholder="Busque aqui..."
        lightTheme round editable={true}
        value={this.state.search}
        onChangeText={this.updateSearch} />; 
    }

    updateSearch = search => {
        this.setState({ search }, () => {
            if ('' == search) {
                this.setState({
                    cursos: [...this.state.temp]
                });
                return;
            }
             
            this.state.cursos = this.state.temp.filter(function(item){
                return item.title.toLowerCase().includes(search.toLowerCase()) 
                    || item.company.toLowerCase().includes(search.toLowerCase())
              })
        })
    }

    render() {
        return(
            <View style={styles.container}>
                {/* <View style={styles.header}></View> */}
                <View style={styles.body}>
                    <FlatList ListHeaderComponent={this.renderHeader} 
                        data={this.state.cursos}
                        keyExtractor={item => `${item.id}`} 
                        renderItem={({item, index}) => <Curso {...item} onPress={() => this.onRegisterOrUnregister(item.id)} />} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
    },
    body: {
        flex: 1,
        marginTop: 30
    },
    searchBarContainer: {
        backgroundColor: 'white',
        borderWidth: 0
    }
})