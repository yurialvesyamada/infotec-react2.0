import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Menu = () => {
  return (
    <View style={navbar.container}>
      <Image
        style={navbar.logo}
        source={{
          uri: 'https://github.com/yurialvesyamada/infotec-react2.0/blob/redux/src/assets/img/logo_vermelho.png?raw=true',
        }}
      />
    </View>
  );
};

const navbar = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: "#17a2b8",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  logo: {
    width: 70,
    height: 70,
    borderRadius: 6,
  },
})

export default Menu;
