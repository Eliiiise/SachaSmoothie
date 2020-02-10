import React from 'react';
import {StyleSheet, Text, View, Image, KeyboardAvoidingView, Keyboard, Button, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import  ButtonTest  from "./Button.js";
import  NameUser  from "./Name.js";
import  ProgressBare  from "./Progress.js";
import  EndSacha  from "./End.js";
import ProgressBar from "react-native-web/src/exports/ProgressBar";

export default function Screen2({navigation}) {
    const stape=80;
    const nom="Louise";
    return (
        <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
            <Image  style={{ marginTop:-70, alignSelf:'center', position:'absolute'}} source={require("../assets/wave.png")} />
            <Text style={[styles.title, { marginTop:30}]}>
                Comment ca va aujourd’hui {nom} ?
            </Text>
            <Image  style={{width: 60, height: 90, alignSelf:'flex-end', marginTop:-80}} source={require("../assets/sacha.png")} />
            <TouchableOpacity style={[styles.casereponse, {marginTop:120}]}>
                <Text style={styles.reponse}>
                    A merveille
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.casereponse}>
                <Text style={styles.reponse}>
                    Bof aujourd'hui
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.casereponse, {marginBottom:60}]}>
                <Text style={styles.reponse}>
                    Je suis a bout !
                </Text>
            </TouchableOpacity>
            <ProgressBare stape={stape}/><EndSacha/>
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
    },
    casereponse: {
        backgroundColor: '#d56277',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    reponse: {
        color:'white',
    },
});
