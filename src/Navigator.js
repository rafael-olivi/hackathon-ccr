import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Auth from './screens/Auth';
import Home from './screens/Home';
import Tela2 from './screens/Tela2';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const menuConfig = {
    labelStyle: {
        fontWeight: 'normal',
        fontSize: 20
    },
    activeTintColor: '#080',
}

const DrawerNavigator = props => {
    // const { email, name } = props.route.params
    return (
        <Drawer.Navigator drawerContentOptions={menuConfig} initialRouteName="Home">
            <Drawer.Screen name="Home" options={{ title: 'Principal' }} component={Home} />
            <Drawer.Screen name="Tela 2" component={Tela2} />
            {/* <Drawer.Screen name="Tomorrow" options={{ title: 'Amanhã' }}>
                {props => <TaskList {...props} title='Amanhã' daysAhead={1} />}
            </Drawer.Screen> */}
            {/* <Drawer.Screen name="Week" options={{ title: 'Semana' }}>
                {props => <TaskList {...props} title='Semana' daysAhead={7} />}
            </Drawer.Screen>
            <Drawer.Screen name="Month" options={{ title: 'Mês' }}>
                {props => <TaskList {...props} title='Mês' daysAhead={30} />}
            </Drawer.Screen> */}
        </Drawer.Navigator>
    )
}

const AuthNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Home" component={DrawerNavigator} />
        </Stack.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
};

export default Navigator