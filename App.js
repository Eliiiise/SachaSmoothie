
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View, Image, KeyboardAvoidingView, Keyboard, Button} from 'react-native';
import * as Font from 'expo-font';
import Screen1 from "./Components/Screen1";
import Screen2 from "./Components/Screen2";
import {createStackNavigator} from '@react-navigation/stack';
import { createStackNavigator } from 'react-navigation';
import { fromLeft } from 'react-navigation-transitions';

const Stack = createStackNavigator();

const appStack = createStackNavigator(
    {
        ScreenA: {
            screen: Screen1,
        },
        ScreenB: {
            screen: Screen2,
        },
    },
    {
        initialRouteName: 'Screen1',
        transitionConfig: () => fromLeft(),
    },
);

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Screen1" component={Screen1}  options={{title: 'Bienvenu'}} />
                    <Stack.Screen name="Screen2" component={Screen2} options={{title: 'Question 1/3'}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
