import React from "react";
import { View } from "react-native";
import Button from "../components/Button";

import TextCenter from "../components/TextCenter";

const Products = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Button navigation={props.navigation} /> */}
      <TextCenter text="Produtos" />
    </View>
  );
};

export default Products;
