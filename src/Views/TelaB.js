import React from "react";
import { View } from "react-native";
import Button from "../components/Button";

import TextCenter from "../components/TextCenter";

const TelaB = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Button navigation={props.navigation} /> */}
      <TextCenter text="Tela B" />
    </View>
  );
};

export default TelaB;
