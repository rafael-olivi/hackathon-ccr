import React from 'react'
import { CommonActions } from '@react-navigation/native';
import { Gravatar } from 'react-native-gravatar'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

    const logout = () => {
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: 'Auth',
                    },
                ],
            })
        )
    }

    return(
        <DrawerContentScrollView style={{backgroundColor: '#C4C4C4'}}>
            <View style={styles.header}>
                <Text style={styles.title}>Trilhaê</Text>
                <Gravatar style={styles.avatar}
                    options={{
                        email: props.email,
                        secure: true
                    }} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>
                        {props.name}
                    </Text>
                    <Text style={styles.email}>
                        {props.email}
                    </Text>
                </View>
                <TouchableOpacity onPress={logout}>
                    <View style={styles.logoutIcon}>
                        <Icon name='sign-out' size={30} color='#800' />
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )


}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#625F5F'
    },
    title: {
        color: '#000',
        fontSize: 30,
        padding: 10,
        fontFamily: 'Montserrat_600SemiBold',
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        margin: 10,
        backgroundColor: '#222'
    },
    userInfo: {
        marginLeft: 10,
        fontFamily: 'Montserrat_500Medium',
    },
    name: {
        fontSize: 20,
        color: '#222',
        marginBottom: 5,
        fontFamily: 'Montserrat_500Medium',
    },
    email: {
        fontSize: 15,
        color: 'black',
        marginBottom: 10,
        fontFamily: 'Montserrat_500Medium',
    },
    logoutIcon: {
        marginLeft: 10,
        marginBottom: 10
    }
})