import React from "react";
import { View } from "react-native";
import TextCenter from "../components/TextCenter";
import Button from '../components/Button'


const Home = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Button navigation={props.navigation}/> */}
      <TextCenter text="Home" />
    </View>
  );
};

export default Home;

/*  
  TELA A = Home
*/