import {StyleSheet, Image} from "react-native";
import React, { Component} from 'react';

class EndSacha extends Component {
    render() {
        return (
            <Image  style={styles.image} source={require("../assets/sacha.png")} />
        )
    }
}
export default EndSacha;


const styles = StyleSheet.create({
    image: {
        width:20,
        height:40,
        marginStart: 265,
        marginTop:42,
    }

});
