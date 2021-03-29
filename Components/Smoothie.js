import React, {Component, useState, useEffect} from 'react';
import {
    AppRegistry,
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableNativeFeedback,
    Image, KeyboardAvoidingView, AsyncStorage, View
} from 'react-native';

export default function Smoothie(props) {
    const [nb2, setNb2] = useState('0');
    const [nb, setNb] = useState('0');
    let display = 'flex';
    var x = 0;
    const [modHeight, setModHeight] = useState(0);
    const [op, setOp] = useState(0);
    const [dis, setDis] = useState('none');

    const displayData = async ()=>{
        try{
            var id = props.clef;
            let nb = await AsyncStorage.getItem(id);
            let nb2 = await AsyncStorage.getItem('Pan');
            nb = parseInt(nb)+x;
            nb2 = parseInt(nb2)+x;
            console.log(nb2);
            setNb(nb);
            setNb2(nb2);
            AsyncStorage.setItem(id, JSON.stringify(nb));
            AsyncStorage.setItem('Pan', JSON.stringify(nb2));
        }
        catch(error){
            alert(nbPanier)
        }
    }
    if (nb==0){
        displayData();
        display = 'none';
    }



    function pressed() {
        setModHeight(110);
        setOp(1);
        setDis('flex');
    }

    function moin() {
        x=-1;
        displayData();
    }

    function plus() {
        x=1;
        displayData();
    }


    useEffect(() => {
        props.setNb(nb2);
    },[nb2]);

    console.log(props.clef);

    return (
        <View>
            <TouchableOpacity onPress={pressed} style={[styles.casereponse, {backgroundColor: props.color, display: display}]}>
                <Image  style={{width: 50, height: 100, alignSelf:'flex-start', marginLeft: -20, marginTop:-90}} source={props.img} />
                <Text style={styles.title}>
                    {props.titre}
                </Text>
                <Text style={styles.content}>
                    {props.content}
                </Text>
                <View style={[styles.cercle, {opacity: 1}]}><Text style={styles.text}>{nb}</Text></View>
            </TouchableOpacity>
            <View style={[styles.modif,{display: 'none', height: modHeight, opacity: op }]} >
                <TouchableOpacity  onPress={moin} style={[styles.cercle2,{backgroundColor: '#4ca1ff'}]}>
                    <Text style={styles.modBut}>-</Text>
                </TouchableOpacity>
                <View style={[styles.cercle2,{backgroundColor: 'rgba(0,0,0,0)', width:100}]}>
                    <Text style={styles.nb}>{nb}</Text>
                </View>
                <TouchableOpacity  onPress={plus} style={[styles.cercle2,{backgroundColor: '#4ca1ff'}]}>
                    <Text style={styles.modBut}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    casereponse: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderRadius: 20,
        margin: 10,
        width:280,
        marginLeft:20,
    },
    title: {
        color:'white',
        fontSize:18,
        marginTop:-80,
        fontWeight: 'bold',
        width:200,
    },
    content: {
        color:'white',
        fontSize:14,
        width:200,
    },
    cercle: {
        borderRadius:20,
        height:20,
        width:20,
        backgroundColor: '#3699ee',
        marginTop:-85,
        marginRight: -210,
    },
    cercle2: {
        borderRadius:20,
        height:40,
        width:40,
        marginTop:20,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color:'#fff',
        fontSize: 12,
        textAlign:'center',
        marginTop: 1,
    },
    modif: {
        marginTop: 10,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.9)',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modBut: {
        color:'white',
        fontSize:30,
        fontWeight: 'bold',
        marginTop:-3,
    },
    nb: {
        color:'#555555',
        fontSize:40,
        fontWeight: 'bold',
        marginTop:-10,
    }
});
