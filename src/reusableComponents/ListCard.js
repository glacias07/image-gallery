
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';


class ListCard extends Component {

    render() {
        const { imageStyle, cardStyle, textViewStyle, buttonDesign } = styles;
        const { image, ownerName } = this.props
        return (
            <View style={cardStyle}>
                <Image style={imageStyle} source={{ uri: image }} />
                <View style={textViewStyle}>
                    <Text style={{ color: 'black', fontSize: 20 }}>{ownerName}</Text>
                </View>
                <TouchableOpacity
                    style={buttonDesign}
                    onPress={() => {
                        Alert.alert('Download has started')
                    }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Download</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const BORDER_RADIUS = 35

const styles = StyleSheet.create({
    imageStyle: {
        borderTopLeftRadius: BORDER_RADIUS,
        borderTopRightRadius: BORDER_RADIUS,
        height: 300,
        width: '100%'
    },
    cardStyle: {
        backgroundColor: 'white',
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        elevation: 5,
        borderRadius: BORDER_RADIUS
    },
    textViewStyle: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDesign: {
        backgroundColor: '#1DA1F2',
        width: '65%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
    }
})

export default ListCard;