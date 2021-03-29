import {Button, StyleSheet, Keyboard} from "react-native";
import React, { Component} from 'react';

class ButtonTest extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Prénom', op: 0.2 };
    }
    render() {
        return (
            <Button style={styles.button} onPress={this.props.pressed} title={this.props.text} />
        )
    }
}
export default ButtonTest;


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 400,
        marginTop: 100,
    },
});
