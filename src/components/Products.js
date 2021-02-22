import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { color } from "react-native-reanimated";

export default function Products() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Produtos
            </Text>
                <View style={styles.cards}>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/assets/img/Notebook-Acer.png?raw=true'
                        }}>
                    </Image>
                    <Text style={styles.categoria}>
                        Notebook Acer Aspire 3 Intel Core i5-10210U, 8GB, 1TB, SSD 128GB, Endless OS, 15.6´, Cinza - A315-54-53M1
                    </Text>
                    <Text style={styles.preco}>
                        Preço: R$4218.29
                    </Text>
                </View>

                <View style={styles.cards}>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/assets/img/Notebook-Lenovo.png?raw=true'
                        }}>
                    </Image>
                    <Text style={styles.categoria}>
                        Notebook Lenovo Ultrafino ideapad S145, AMD Ryzen 7-3700U, 8GB, SSD 256GB Windows 10, 15.6, Prata
                    </Text>
                    <Text style={styles.preco}>
                        Preço: R$2754.00
                    </Text>
                </View>

                <View style={styles.cards}>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/assets/img/core-i9.jpg?raw=true'
                        }}>
                    </Image>
                    <Text style={styles.categoria}>
                        Processador Intel Core i9-9900k Coffee Lake Refresh 9a Geração, 3.6GHz
                    </Text>
                    <Text style={styles.preco}>
                        Preço: R$3882.24
                    </Text>
                </View>


            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        alignItems: "center",
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 25,
        padding: 10

    },
    cards: {
        flex: 1,
        alignItems: 'center',
        padding: 2,
    },
    images: {
        width: 140,
        height: 140,
    },
    categoria: {
        fontSize: 14,
        color: '#17a2b8',
        padding: 2,
        textAlign: 'center',
        alignItems: "center",
    },
    preco: {
        fontSize: 14,
        padding: 2,
    }
})