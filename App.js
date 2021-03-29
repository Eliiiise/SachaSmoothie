
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';
import {StyleSheet, Text, View, Image, KeyboardAvoidingView, Keyboard, Button} from 'react-native';
import * as Font from 'expo-font';
import Screen1 from "./Components/screen/Screen1";
import Screen2 from "./Components/screen/Screen2";
import Screen3 from "./Components/screen/question2/Screen3";
import Screen4 from "./Components/screen/question2/Screen4";
import Screen5 from "./Components/screen/question2/Screen5";
import Screen6 from "./Components/screen/question3/Screen6";
import Screen7 from "./Components/screen/question3/Screen7";
import Screen8 from "./Components/screen/question3/Screen8";
import Screen9 from "./Components/screen/question3/Screen9";
import Screen10 from "./Components/screen/question3/Screen10";
import Screen11 from "./Components/screen/question3/Screen11";
import Myrtille from "./Components/screen/smoothies/Myrtille";
import Tagada from "./Components/screen/smoothies/Tagada";
import Avocat from "./Components/screen/smoothies/Avocat";
import Banane from "./Components/screen/smoothies/Banane";
import Jasmin from "./Components/screen/smoothies/Jasmin";
import Poivron from "./Components/screen/smoothies/Poivron";
import Kiwi from "./Components/screen/smoothies/Kiwi";
import Panier from "./Components/screen/Panier";

/*import { createStackNavigator } from '@react-navigation/stack';
import { fromLeft } from 'react-navigation-transitions';


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
);*/

const Stack = createStackNavigator();
let nb = 0;
AsyncStorage.setItem('Pan', JSON.stringify(nb));
let av = 0;
AsyncStorage.setItem('Avocat', JSON.stringify(av));
let ba = 0;
AsyncStorage.setItem('Banane', JSON.stringify(ba));
let ja = 0;
AsyncStorage.setItem('Jasmin', JSON.stringify(ja));
let ki = 0;
AsyncStorage.setItem('Kiwi', JSON.stringify(ki));
let my = 0;
AsyncStorage.setItem('Myrtille', JSON.stringify(my));
let po = 0;
AsyncStorage.setItem('Poivron', JSON.stringify(po));
let ta = 0;
AsyncStorage.setItem('Tagada', JSON.stringify(ta));


export default class App extends React.Component {



    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Screen1" component={Screen1}  options={{title: 'Bienvenue'}} />
                    <Stack.Screen name="Screen2" component={Screen2} options={{title: 'Questions'}}/>
                    <Stack.Screen name="Screen3" component={Screen3} options={{title: 'Questions'}}/>
                    <Stack.Screen name="Screen4" component={Screen4} options={{title: 'Questions'}}/>
                    <Stack.Screen name="Screen5" component={Screen5} options={{title: 'Questions'}}/>
                    <Stack.Screen name="Screen6" component={Screen6} options={{title: 'Questions'}}/>
                    <Stack.Screen name="Screen7" component={Screen7} options={{title: 'Questions'}}/>
                    <Stack.Screen name="Screen8" component={Screen8} options={{title: 'Questions'}}/>
                    <Stack.Screen name="Screen9" component={Screen9} options={{title: 'Questions'}}/>
                    <Stack.Screen name="Screen10" component={Screen10} options={{title: 'Questions'}}/>
                    <Stack.Screen name="Screen11" component={Screen11} options={{title: 'Questions'}}/>
                    <Stack.Screen name="Myrtille" component={Myrtille} options={{title: 'Voilà ton smoothie'}}/>
                    <Stack.Screen name="Tagada" component={Tagada} options={{title: 'Voilà ton smoothie'}}/>
                    <Stack.Screen name="Avocat" component={Avocat} options={{title: 'Voilà ton smoothie'}}/>
                    <Stack.Screen name="Banane" component={Banane} options={{title: 'Voilà ton smoothie'}}/>
                    <Stack.Screen name="Jasmin" component={Jasmin} options={{title: 'Voilà ton smoothie'}}/>
                    <Stack.Screen name="Poivron" component={Poivron} options={{title: 'Voilà ton smoothie'}}/>
                    <Stack.Screen name="Kiwi" component={Kiwi} options={{title: 'Voilà ton smoothie'}}/>
                    <Stack.Screen name="Panier" component={Panier} options={{title: 'Panier'}}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
