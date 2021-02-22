import React from "react";
import { Text, ScrollView, StyleSheet, View, Image } from "react-native";

const Contact = (props) => {
    return (
        <ScrollView>
            <View style={contato.container}>
                <Text style={contato.text}>Contato</Text>

                <Text style={contato.titles}>94875-6799</Text>
                <Image style={contato.logos}
                    source={{ uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/components/logos/whatsapp.png?raw=true' }}></Image>
                <Text >

                </Text>

                <Text style={contato.titles}>@Infotec</Text>
                <Image style={contato.logos}
                    source={{ uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/components/logos/instagram.jpg?raw=true' }}></Image>
                <Text >

                </Text>

                <Text style={contato.titles}>Infotec</Text>
                <Image style={contato.logos}
                    source={{ uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/components/logos/facebook.png?raw=true' }}></Image>
                <Text >

                </Text>

                <Text style={contato.titles}>infotec.org@hotmail.com</Text>
                <Image style={contato.logos}
                    source={{ uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/components/logos/email.png?raw=true' }}></Image>
                <Text >

                </Text>
            </View>
        </ScrollView>
    );
};


const contato = StyleSheet.create({
    container: {
        textAlign: 'center',
        alignItems: "center",
    },
    text: {
        fontSize: 35,
        margin: 30,
        color: '#17a2b8'
    }, cards: {
        alignItems: 'center',
        padding: 5,
    },
    logos: {
        width: 120,
        height: 120,
        margin: 20
    },
    titles: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        alignItems: "center",
    }
});

export default Contact;
