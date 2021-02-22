import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Pay from '../components/Pagamento';

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
                        Preço: R$ 4218.29
                    </Text>
                </View>

                <View style={styles.cards}>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/assets/img/Notebook-Samsung-e30.png?raw=true'
                        }}>
                    </Image>
                    <Text style={styles.categoria}>
                        Notebook Samsung Book E30 Intel Core i3-10110U 10ª Geração 4GB 1TB 15.6'' Windows 10
                    </Text>
                    <Text style={styles.preco}>
                        Preço: R$ 3099.00
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
                            uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/assets/img/Notebook-Samsung-x50.png?raw=true'
                        }}>
                    </Image>
                    <Text style={styles.categoria}>
                        Notebook Samsung Book X50 Intel Core i7-10510U 10ª Geração 8GB, 1TB, Placa de Vídeo 2GB
                    </Text>
                    <Text style={styles.preco}>
                        Preço: R$ 4999.00
                    </Text>
                </View>

                <View style={styles.cards}>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/162431'
                        }}>
                    </Image>
                    <Text style={styles.categoria}>
                        Notebook Samsung Expert X40 Intel Core i5 Quad-Core, Windows 10 Home, 8GB, 1TB, Placa de video 2GB, 15.6'' HD LED
                    </Text>
                    <Text style={styles.preco}>
                        Preço: R$ R$ 9.999,99
                    </Text>
                </View>

                <View style={styles.cards}>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/assets/img/amd-radeon.jpg?raw=true'
                        }}>
                    </Image>
                    <Text style={styles.categoria}>
                        Placa de Vídeo Gigabyte AMD Radeon RX 580 Gaming, 8GB, GDDR5 WINDFORCE 256-BIT
                    </Text>
                    <Text style={styles.preco}>
                        Preço: R$ 1481.18
                    </Text>
                </View>

                <View style={styles.cards}>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/assets/img/gtx1660.jpg?raw=true'
                        }}>
                    </Image>
                    <Text style={styles.categoria}>
                        Placa de Vídeo Gigabyte GTX 1660 Super OC NVIDIA Geforce 6G, GDDR6
                    </Text>
                    <Text style={styles.preco}>
                        Preço: R$ 1882.24
                    </Text>
                </View>

                <View style={styles.cards}>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/assets/img/radeon-rx.jpg?raw=true'
                        }}>
                    </Image>
                    <Text style={styles.categoria}>
                        Placa de Vídeo Gigabyte AMD Radeon RX 5600 XT Gaming OC, 6GB, GDDR6
                    </Text>
                    <Text style={styles.preco}>
                        Preço: R$ 2109.90
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
                        Preço: R$ 3882.24
                    </Text>
                </View>

                <View style={styles.cards}>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/assets/img/ryzen7.jpg?raw=true'
                        }}>
                    </Image>
                    <Text style={styles.categoria}>
                        Processador AMD Ryzen 7 3800X Cache 32MB 3.9GHz (4.5GHz Max Turbo)
                    </Text>
                    <Text style={styles.preco}>
                        Preço: R$ 2549.90
                    </Text>
                </View>

                <View style={styles.cards}>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/assets/img/memoria-ram.jpg?raw=true'
                        }}>
                    </Image>
                    <Text style={styles.categoria}>
                        Memória HyperX Predator RGB, 16GB (2x8GB), 2933MHz, DDR4, CL15
                    </Text>
                    <Text style={styles.preco}>
                        Preço: R$ 879.90
                    </Text>
                </View>

                <View style={styles.cards}>
                    <Image style={styles.images}
                        source={{
                            uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/assets/img/monitor_novo.png?raw=true'
                        }}>
                    </Image>
                    <Text style={styles.categoria}>
                        Monitor Gamer Alienware AW2521HF 240Hz G-Sync FreeSync WLED Full HD IPS 24,5
                    </Text>
                    <Text style={styles.preco}>
                        Preço: R$ 9089.00
                    </Text>
                </View>


                <Pay />
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
        fontSize: 35,
        padding: 10,
        color: '#17a2b8'

    },
    cards: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
    },
    images: {
        width: 170,
        height: 170,
    },
    categoria: {
        fontSize: 18,
        color: '#17a2b8',
        padding: 2,
        textAlign: 'center',
        alignItems: "center",
    },
    preco: {
        fontSize: 16,
        padding: 2,
    }
})