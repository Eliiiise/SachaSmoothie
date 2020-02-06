import {StyleSheet, View} from "react-native";
import React, { Component} from 'react';


class ProgressBare extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.second}>
                </View>
            </View>
        )
    }
}
export default ProgressBare;


const styles = StyleSheet.create({
    main: {
        width: 280,
        height: 5,
        backgroundColor: '#f993a8',
        marginBottom: -70,
        marginTop:70,
        opacity: 1,
        borderRadius:10,
    },
    second: {
        width: 50,
        height: 5,
        backgroundColor: '#ffffff',
        opacity: 1,
        borderRadius:10,
    },
});
