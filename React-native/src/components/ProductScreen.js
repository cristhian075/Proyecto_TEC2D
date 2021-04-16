import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const image1 = { uri: "https://fondosmil.com/fondo/27468.jpg" };

export default function ProductScreen({ navigation }) {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <ImageBackground source={image1} style={{ flex: 1, resizeMode: "cover", justifyContent: "space-around" }}>
          <Text style={{ color: "white", fontSize: 37, fontWeight: "bold", textAlign: "center", backgroundColor: "#000000a0" }}>
            PRODUCTOS</Text>
        </ImageBackground>
      </View>
    );
  }