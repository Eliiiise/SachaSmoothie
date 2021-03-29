import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, KeyboardAvoidingView, Keyboard, Button} from 'react-native';
import  ProgressBare  from "../../Progress.js";
import  EndSacha  from "../../End.js";
import  ButtonTest  from "../../Button.js";
import Bag from "../../Bag";
import {AsyncStorage} from 'react-native';
import Reponse from "../../Reponse";

export default function Myrtille({route , navigation}) {

    const [nb, setNb] = useState('0');
    const [my, setMy] = useState('0');
    const { name } = route.params;
    const stape=280;

    const press = (nextPage) => {
        navigation.navigate(nextPage, {name: name});
    }

    const displayData = async ()=>{
        try{
            let nbPanier = await AsyncStorage.getItem('Pan');
            nbPanier = parseInt(nbPanier)+1;
            setNb(nbPanier);
            AsyncStorage.setItem('Pan', JSON.stringify(nbPanier) );

            let nbMy = await AsyncStorage.getItem('Myrtille');
            nbMy = parseInt(nbMy)+1;
            setMy(nbMy);
            AsyncStorage.setItem('Myrtille', JSON.stringify(nbMy) );
        }
        catch(error){
            alert(nbPanier)
        }
    }

    const displayData2 = async ()=>{
        try{
            let nbPanier = await AsyncStorage.getItem('Pan');
            nbPanier = parseInt(nbPanier);
            setNb(nbPanier);
            AsyncStorage.setItem('Pan', JSON.stringify(nbPanier) );

            let nbMy = await AsyncStorage.getItem('Myrtille');
            nbMy = parseInt(nbMy);
            setMy(nbMy);
            AsyncStorage.setItem('Myrtille', JSON.stringify(nbMy) );
        }
        catch(error){
            alert(nbPanier)
        }
    }

    function pressed() {
        displayData();
    }

    function pressed2() {
        displayData2();
    }

    if (nb==0){
        pressed2();
    }





    return (
            <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
                <Image  style={{ marginTop:-120, alignSelf:'center', position:'absolute'}} source={require("../../../assets/waveblanc.png")} />
                <Bag nb={nb} press={press} nextScreen={"Panier"}/>
                <Image  style={{width: 180, height: 300, marginTop:-60, alignSelf:'center'}} source={require("../../../assets/violet.png")} />
                <Text style={[styles.title, { marginTop:-30}]}>
                    Le smoothie Romance est fait  {"\n"}pour toi !
                </Text>
                <Text style={styles.text}>
                    Tu vas faire des jaloux {name} !{"\n"} Ce smoothie est composé de framboise et de myrtille.
                </Text>
                <ButtonTest text={"ajouter au panier"} pressed={pressed}/>
                <Text style={[styles.text,{marginBottom:-40, marginTop: 20}]}>
                    Voir les autres smoothies
                </Text>
                <ProgressBare stape={stape}/><EndSacha/>
                <View style={styles.bot}></View>
            </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#994cd5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color:'white',
        fontWeight: 'bold',
        fontSize: 30,
        width:280,
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
        marginLeft:20,
    },
    bot: {
        height:20,
    }
});
