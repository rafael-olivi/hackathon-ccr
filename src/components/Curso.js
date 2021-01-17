import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ReadMore from 'react-native-read-more-text'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useFonts, Montserrat_300Light, Montserrat_500Medium, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

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
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={{fontFamily: 'Montserrat_500Medium'}}>Empresa: {props.company}</Text>
            
            <ReadMore numberOfLines={2} 
                renderTruncatedFooter={_renderTruncatedFooter}
                renderRevealedFooter={_renderRevealedFooter}
                onReady={_handleTextReady}>
                    <Text style={{fontFamily: 'Montserrat_300Light'}}>{props.desc}</Text>
            </ReadMore>
            
            <TouchableOpacity onPress={() => props.onPress()}>
                <View style={styles.button}>
                    <Icon name={props.registered ? 'check' : 'times'} size={20} color={props.registered ? 'green' : 'darkred'} />
                    <Text style={styles.buttonText}>
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
        borderRadius: 5,
        marginBottom: 10,
    },
    title: {
        width: '100%',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        fontFamily: 'Montserrat_600SemiBold'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#F25E3D',
        marginTop: 10,
        borderRadius: 7,
        padding: 10,
        marginBottom: 5
    },
    buttonText: {
        marginLeft: 5,
        color: 'white'
    }
})