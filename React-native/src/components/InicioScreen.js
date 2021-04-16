import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const image = { uri: "https://www.wallpapertip.com/wmimgs/21-212841_abstract-flames-iphone-6-plus-wallpapers-blue-flames.jpg" };

export default function InicioScreen({ navigation }) {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <ImageBackground source={image} style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}>
          <Text style={{ color: "white", fontSize: 37, fontWeight: "bold", textAlign: "center", backgroundColor: "#000000a0" }}>
            SERVIGAS DEL HUILA</Text>
        </ImageBackground>
      </View>
    );
  }