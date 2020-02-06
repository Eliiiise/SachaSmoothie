import React from 'react';
import {StyleSheet, Text, View, Image, KeyboardAvoidingView, Keyboard, Button} from 'react-native';
import * as Font from 'expo-font';
import  ButtonTest  from "./Button.js";
import  NameUser  from "./Name.js";
import  ProgressBare  from "./Progress.js";
import  EndSacha  from "./End.js";
import ProgressBar from "react-native-web/src/exports/ProgressBar";

export default function Screen1() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
            <Image  style={{ marginTop:-70, alignSelf:'center', position:'absolute'}} source={require("../assets/wave.png")} />
            <Text style={[styles.title, { marginTop:100}]}>
                Hello,{'\n'}moi c'est Sacha !
            </Text>
            <Image  style={{width: 120, height: 190, alignSelf:'center',}} source={require("../assets/sacha.png")} />
            <Text style={styles.text}>
                Je vais t'aider à choisir ton smoothie du jour.
            </Text>
            <Text style={styles.title}>
                Et toi tu t'appelles comment ?
            </Text>
            <NameUser/>
            <View style={styles.button}>
                <ButtonTest/>
            </View>
            <ProgressBare/><EndSacha/>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d54b66',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color:'white',
        fontWeight: 'bold',
        fontSize: 30,
        width:280,
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1.2,
    },
    text: {
        color:'white',
        fontWeight: '400',
        fontSize: 16,
        width:250,
        textAlign:'center',
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        width:120,
        marginStart:160,
    }
});
