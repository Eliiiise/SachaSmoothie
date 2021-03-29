import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, KeyboardAvoidingView, Keyboard, Button, TouchableOpacity, ScrollView } from 'react-native';
import Smoothie from "../Smoothie";
import {AsyncStorage} from 'react-native';
import ButtonTest from "../Button";


export default function Panier({route , navigation}) {
    let display='flex';
    const [nb, setNb] = useState('0');

    const displayData = async ()=>{
        try{
            let nbPanier = await AsyncStorage.getItem('Pan');
            setNb(nbPanier);
            console.log("nb Paner"+nbPanier);
        }
        catch(error){
            alert(nbPanier)
        }
    };

    displayData();
    let texte= 'Prix :'+nb*5+'$';
    if (nb==0){
        texte = "Vide";
        display = 'none';
    }

    useEffect(() => {
        let texte= 'Prix : '+nb*5+'$';
    },[nb]);


    const { name } = route.params;
    const pressed = (nextPage) => {
        navigation.navigate(nextPage, {name: name});
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
            <ScrollView style={styles.smoothies}>
                <View style={styles.scrollable}>
                    <Smoothie setNb={setNb} clef={"Myrtille"} color={'#994cd5'} img={require("../../assets/violet.png")} titre={'Le smoothie Romance'} content={'Ce smoothie est composé de framboise et de myrtille.'}></Smoothie>
                    <Smoothie setNb={setNb} clef={"Kiwi"} color={'#61d5a1'} img={require("../../assets/bleu.png")} titre={'Le smoothie Kiwi Bleu'} content={'Ce smoothie est composé de Kiwi et de mûre.'}></Smoothie>
                    <Smoothie setNb={setNb} clef={"Avocat"} color={'#97d564'} img={require("../../assets/vert.png")} titre={'Le smoothie Force Verte'} content={'Ce smoothie est composé d\'avocat et de romarin.'}></Smoothie>
                    <Smoothie setNb={setNb} clef={"Banane"} color={'#f8d127'} img={require("../../assets/jaune.png")} titre={'Le smoothie Gourmand'} content={'Ce smoothie est composé de banane et d\'amande.'}></Smoothie>
                    <Smoothie setNb={setNb} clef={"Poivron"} color={'#fbbe1f'} img={require("../../assets/orange.png")} titre={'Le smoothie Pimenté'} content={'Ce smoothie est composé de poivron et de carotte.'}></Smoothie>
                    <Smoothie setNb={setNb} clef={"Jasmin"} color={'#e38f2d'} img={require("../../assets/marron.png")} titre={'Le smoothie Tropique'} content={'Ce smoothie est composé de thé au jasmin et d\'ananas.'}></Smoothie>
                    <Smoothie setNb={setNb} clef={"Tagada"} color={'#d56465'} img={require("../../assets/rouge.png")} titre={'Le smoothie Tagada'} content={'Ce smoothie est composé de fraise tagada et de fraise.'}></Smoothie>
                </View>
                <Text style={styles.title}>
                    {texte}
                </Text>
                <View style={styles.containerButton}>
                    <ButtonTest text={"Acheter"}/>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color:'#b5b8bf',
        fontWeight: 'bold',
        fontSize: 30,
        width:320,
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center',
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
    containerButton: {
        width:160,
        marginStart:80,
        marginBottom:50,
    },
    smoothies: {
        height:600,
        width:380,
        marginLeft:80,
    },
    scrollable: {
        marginTop:20,
        marginBottom:20,
    }

});
