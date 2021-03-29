import  React, {Component, useEffect} from 'react';
import {Button, Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {useState} from "react";
import {AsyncStorage} from 'react-native';
import ButtonTest from "./Button";

export default function Bag(props)  {

    const [op, setOp] = useState('0');

    useEffect(() => {
        if (props.nb===0){
            setOp(0);
        }
        else {
            setOp(1);
        }
    },[props.nb]);


    return (
        <View style={styles.bag}>
            <TouchableOpacity style={[{marginRight:-13, paddingRight:13}]} onPress={() => props.press(props.nextScreen)}>
                <Image source={require("../assets/bag.png")} style={styles.bagImage}/>
                <View style={[styles.cercle, {opacity:1}]}><Text style={styles.text}>{props.nb}</Text></View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    bag: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    bagImage: {
        width:30,
        height:30,
        marginRight:-20,
    },
    cercle: {
        borderRadius:20,
        height:20,
        width:20,
        backgroundColor: '#3699ee',
        marginTop:-12,
        marginRight: -5,
    },
    text: {
        color:'#fff',
        fontSize: 12,
        textAlign:'center',
        marginTop: 1,
    }
});
