import React, { Component } from 'react';
import {AppRegistry, Button, StyleSheet, TextInput} from 'react-native';

export default class NameUser extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Prénom', op: 0.2 };
    }

    render() {
        return (
            <TextInput style={[styles.input, {opacity:this.state.op}]} value={this.state.text}  maxLength = {20} onFocus={() => this.setState({text: '', op: 0.8})} onChangeText={(text)  => {this.setState({text}); console.log(this.state.text); }}/>
            );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'white',
        borderBottomWidth: 1,
        width: 280,
        color: 'white',
        paddingStart:15,
        marginBottom:20,
    },
});
