import React, { Component } from 'react';
import {AppRegistry, Button, StyleSheet, Text, TextInput, TouchableOpacity, TouchableNativeFeedback} from 'react-native';

export default class Reponse extends Component {

    render() {
        return (
            <TouchableOpacity style={[styles.casereponse, { marginTop: this.props.marginTop , marginBottom: this.props.marginBottom }]} onPress={() => this.props.pressed(this.props.nextScreen)}>
                <Text style={styles.reponse}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
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
