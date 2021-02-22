import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Slide({ data }) {
    return (
        <View>
            <Image
                source={{
                    uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/components/carousel/img-carousel/core-i9.jpg?raw=true'
                }}
                style={slides.images}
            ></Image>
            <Text style={slides.container}>Processador Intel Core i9</Text>
            <Image
                source={{
                    uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/components/carousel/img-carousel/amd.jpg?raw=true'
                }}
                style={slides.images}
            ></Image>
            <Text style={slides.container}>Processadores AMD</Text>
            <Image
                source={{
                    uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/components/carousel/img-carousel/marcas.jpg?raw=true'
                }}
                style={slides.images}
            ></Image>
            <Text style={slides.container}>Processadores Intel de 10º Gen</Text>
        </View>
    );
}

const slides = StyleSheet.create({
    container: {
        backgroundColor: 'steelblue',
        alignItems: 'center',
        textAlign: 'center',
        color: 'whitesmoke',
    },
    images: {
        height: 190,
        alignItems: 'center'
    }
})