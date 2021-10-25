import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";


class RenderLoader extends Component {
    render() {
        return (
            <View style={styles.renderLoaderStyle}>
                <ActivityIndicator size="large" color="blue" />
                <Text style={{ color: 'black', marginTop: 30 }}>Loading...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    renderLoaderStyle: {
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 10,
        marginHorizontal: 120,
        marginVertical: 320,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})

export default RenderLoader;