import React, { Component } from 'react'
import { Modal } from 'react-native'
import { TextInput } from 'react-native'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Dialog from 'react-native-dialog'
import { Button, SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Curso from '../components/Curso'

const initialState = {
    curso: {title: '', desc: ''}
}

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
]

export default class AddCurso extends Component {

    state = {
        cursos: mockCursos,
        curso: {title: '', desc: ''},
        temp: mockCursos,
        search: null,
        modalVisible: false,
        dialogVisible: false,
    }

    setModalVisible = visible => {
        this.setState({modalVisible: visible})
    }
    
    setDialogVisible = visible => {
        this.setState({dialogVisible: visible})
    }

    salvarCurso = () => {
        let newArray = [...this.state.cursos]
        newArray = [this.state.curso, ...this.state.cursos]
        this.setState({cursos: newArray})
        this.setState({modalVisible: !this.state.modalVisible})
    }

    handleDelete = () => {
        const cursoIndex = this.state.cursos.findIndex(element => element.id == this.state.curso.id)
        let newArray = [...this.state.cursos]
        newArray.splice(cursoIndex, 1)
        this.setState({cursos: newArray})
        this.setDialogVisible(false)
    }

    showDialog = () => {
        this.setDialogVisible(true)
    }

    handleCancel = () => {
        this.setDialogVisible(false)
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
            <View style={styles.background}>
                <View style={styles.centeredView}>
                    <Modal animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible} 
                    onRequestClose={() => {
                        this.setState({modalVisible: !this.state.modalVisible})
                        this.setState({curso: {
                            ...initialState.curso
                        }})
                    }}>
                        <View >
                            <TextInput style={styles.input} placeholder='Titulo do curso' 
                                value={this.state.curso.title} onChangeText={title => this.setState({ curso: {
                                    ...this.state.curso, title: title
                                }})} />
                            <TextInput placeholder='Descrição do curso' multiline={true} numberOfLines={5}
                                value={this.state.curso.desc} onChangeText={desc => this.setState({ curso: {
                                    ...this.state.curso, desc: desc
                            }})}/>
                            <Button onPress={this.salvarCurso}
                                icon={<Icon style={styles.icon} name='plus'
                                    size={20} color={'blue'} />}
                                title={'Salvar'} />
                        </View>
                    </Modal>
                </View>
                <View style={styles.header}>
                    <Text style={styles.title}>Meus Cursos</Text>
                    <Button onPress={() => {this.setState({modalVisible: true})}}
                        icon={<Icon style={styles.icon} name='plus'
                            size={20} color={'blue'} />}
                        title={'Adicionar novo curso'} />
                </View>
                <View style={styles.body}>
                    <FlatList ListHeaderComponent={this.renderHeader} 
                        data={this.state.cursos}
                        keyExtractor={item => `${item.id}`} 
                        renderItem={({item, index}) => <Curso {...item} edit={true} onPress={this.handleDelete} />} />
                </View>

                <Dialog.Container visible={this.dialogVisible}>
                    <Dialog.Title>Deletar Curso</Dialog.Title>
                    <Dialog.Description>
                            Deseja deletar este curso?
                    </Dialog.Description>
                    <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                    <Dialog.Button label="Delete" onPress={this.handleDelete} />
                </Dialog.Container>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        // alignItems: 'center',
        // padding: 30
    },
    header: {
        alignItems: 'center',
        flex: 2,
        padding: 30
    },
    body: {
        flex: 8,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    icon: {
        marginRight: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    input: {
        marginBottom: 5,
        borderColor: 'black'
    }
})