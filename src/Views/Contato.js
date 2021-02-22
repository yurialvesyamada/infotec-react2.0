import React from "react";
import { View, Text } from "react-native";

import TextCenter from "../components/TextCenter";

const TelaB = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Button navigation={props.navigation} /> */}
      <TextCenter text="Tela C" />
    </View>
  );
};

export default TelaB;
