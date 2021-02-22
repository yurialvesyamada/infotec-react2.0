import React from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";

const Contact = (props) => {
    return (
        <ScrollView>
            <View style={product.container}>
                <Text style={product.text}>Contato</Text>
            </View>

        </ScrollView>
    );
};


const product = StyleSheet.create({
    container: {
        textAlign: 'center',
        alignItems: "center",
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 35,
        padding: 10,
        color: '#17a2b8'
    }


});

export default Contact;
