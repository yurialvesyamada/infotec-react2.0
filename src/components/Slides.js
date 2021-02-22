import React from "react";
import { ScrollView, Text, StyleSheet, Image } from "react-native";

export default function Slide({ data }) {
    return (
        <ScrollView>
            <Image
                source={{
                    uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/components/carousel/img-carousel/core-i9.jpg?raw=true'
                }}
                style={slides.images}
            ></Image>
            <Text style={slides.container}>Processadores Intel Core i9</Text>
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
        </ScrollView>
    );
}

const slides = StyleSheet.create({
    container: {
        backgroundColor: '#17a2b8',
        alignItems: 'center',
        textAlign: 'center',
        color: 'whitesmoke',
        padding: 5
    },
    images: {
        width: '100%',
        height: 370,
        alignItems: 'center'
    }
})