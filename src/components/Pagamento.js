import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Pay() {
    return (
        <ScrollView>
            <Text style={pay.title}>
                Formas de Pagamento
            </Text>
            <Image style={pay.pagamento} source={{
                uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/assets/img/Pagamento.png?raw=true'
            }}>
            </Image>
        </ScrollView>
    )
}

const pay = StyleSheet.create({
    pagamento: {
        width: 200,
        height: 80,
        marginHorizontal: 60,
        alignItems: 'center',
    },
    title: {
        padding: 20,
        fontSize: 25,
        textAlign: 'center',
        alignItems: 'center',
        color: '#17a2b8'
    }
})