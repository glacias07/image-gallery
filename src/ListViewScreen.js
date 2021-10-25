import React from "react";
import { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListCard from "./reusableComponents/ListCard";
import RenderLoader from "./reusableComponents/RenderLoader";
import axios from 'axios';

class ListViewScreen extends Component {

    state = {
        imageList: [],
        showLoader: false
    }

    getImagesAPICall() {
        this.setState({
            showLoader: true
        })
        axios.get('https://picsum.photos/v2/list')
            .then(response => {
                this.setState({
                    showLoader: false
                })
                this.setState({
                    imageList: response.data
                })
            })
            .catch(error => {
                this.setState({
                    showLoader: false
                })
                console.error();
            })
    }

    componentDidMount() {
        this.getImagesAPICall();
    }

    renderLoader() {
        if (this.state.showLoader) {
            return (
                <RenderLoader />
            )
        }
    }

    render() {
        const { ViewStyle, HeaderViewStyle, HeaderTextStyle } = styles
        const { imageList } = this.state

        return (
            <View style={ViewStyle}>
                <View style={HeaderViewStyle}>
                    <Text style={HeaderTextStyle}>Image Gallery</Text>
                </View>
                <FlatList data={imageList}
                    renderItem=
                    {item => <ListCard
                        image={item.item.download_url}
                        ownerName={item.item.author} />
                    }>
                </FlatList>
                {this.renderLoader()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewStyle: {
        backgroundColor: 'white',
        flex: 1,
    },
    HeaderViewStyle: {
        backgroundColor: '#1DA1F2',
        height: 72,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    }
})

export default ListViewScreen;