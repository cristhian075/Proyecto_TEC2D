import * as React from 'react';
import { View, Text, Image } from 'react-native';

export default function ContactenosScreen({ navigation }) {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Image source={{ uri: 'https://thumbs.subefotos.com/181c4b94b8f886df5dd27d6250054ba8o.jpg' }}
          style={{ width: 412, height: 400 }} />
        <Text style={{ color: "black", fontSize: 30, fontWeight: "bold", textAlign: "left" }}>Contactenos</Text>
        <Text></Text>
        <Text style={{ color: "black", fontSize: 25, fontWeight: "bold", textAlign: "left" }}>Telefono: </Text>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "normal", textAlign: "left" }}>+57 3223424252 </Text>
        <Text style={{ color: "black", fontSize: 25, fontWeight: "bold", textAlign: "left" }}>Correo electronico:</Text>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "normal", textAlign: "left" }}>servigasdelhuila@gmail.com</Text>
        <Text style={{ color: "black", fontSize: 25, fontWeight: "bold", textAlign: "left" }}>Direccion: </Text>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "normal", textAlign: "left" }}>Calle 25a #23-36 </Text>
      </View>
    );
  }