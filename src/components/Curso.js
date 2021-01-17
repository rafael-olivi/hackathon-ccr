import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ReadMore from 'react-native-read-more-text'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useFonts, Montserrat_300Light, Montserrat_500Medium, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { Button, Card } from 'react-native-elements';

export default props => {

    let [fontsLoaded] = useFonts({
        Montserrat_300Light,
        Montserrat_600SemiBold,
        Montserrat_500Medium
    });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const _renderTruncatedFooter = (handlePress) => {
        return (
          <Text style={{color: 'blue', marginTop: 5, fontFamily: 'Montserrat_300Light'}} onPress={handlePress}>
            Leia mais...
          </Text>
        );
    }
    
    const _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{color: 'blue', marginTop: 5, fontFamily: 'Montserrat_300Light'}} onPress={handlePress}>
                Ocultar
            </Text>
        );
    }

    const _handleTextReady = () => {
        // ...
    }

    return(
        <Card>
            <Card.Title>{props.title}</Card.Title>
            <Card.Divider/>
            <Text style={styles.textEmpresa}>Empresa: {props.company}</Text>
            
            <ReadMore numberOfLines={2} 
                renderTruncatedFooter={_renderTruncatedFooter}
                renderRevealedFooter={_renderRevealedFooter}
                onReady={_handleTextReady}>
                    <Text style={styles.textDesc}>{props.desc}</Text>
            </ReadMore>

            {!props.edit &&
                <Button onPress={() => props.onPress()}
                icon={<Icon style={styles.icon} name={props.registered ? 'times' : 'check'}
                    size={20} color={props.registered ? 'darkred' : 'green'} />}
                buttonStyle={styles.button}
                title={props.registered ? 'Desinscreva-se' : 'Inscreva-se'} />
            }

            {props.edit &&
                <Button onPress={() => props.onPress()}
                icon={<Icon style={styles.icon} name={'trash'}
                    size={20} color={'red'} />}
                buttonStyle={styles.button}
                title={'remover'} />
            }
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 10,
        margin: 10
    },
    title: {
        width: '100%',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        fontFamily: 'Montserrat_600SemiBold'
    },
    textEmpresa: {
        fontFamily: 'Montserrat_500Medium',
    },
    textDesc: {
        fontFamily: 'Montserrat_300Light',
    },
    button: {
        backgroundColor: '#F25E3D',
        marginTop: 10,
        borderRadius: 7,
        padding: 10,
        marginBottom: 5
    },
    icon: {
        marginRight: 5,
    }
})