import {Button, StyleSheet, Keyboard} from "react-native";
import React, { Component} from 'react';

class ButtonTest extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Prénom', op: 0.2 };
    }
    render() {
        return (
            <Button style={styles.button}  onPress={() => {Keyboard.dismiss(); }} title="Valider" />
        )
    }
}
export default ButtonTest;


const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 400,
        marginTop: 100,
    },
});
