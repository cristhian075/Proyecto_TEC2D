import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, margin: 10, marginTop: 30, padding: 30, justifyContent: "center" }}>
      <View>
      <Image source={ require('./imagenes/Login.png')}
          style={{ width: 330, height: 330, resizeMode: 'stretch'}} />
      </View>
      <TextInput
        placeholder={'Correo'}
        underlineColorAndroid="transparent"
        style={{ textAlign: 'center', height: 40, borderWidth: 0.5, marginTop: 60, marginBottom: 10, fontSize: 20, borderColor: 'black', borderWidth: 2, borderRadius: 20 }} />
      <TextInput
        placeholder={'Contraseña'}
        secureTextEntry={true}
        underlineColorAndroid="transparent"
        style={{ textAlign: 'center', height: 40, borderWidth: 0.5, marginTop: 10, marginBottom: 10, fontSize: 20, borderColor: 'black', borderWidth: 2, borderRadius: 20 }} />
      <TouchableOpacity
        onPress={() => alert('')}
        style={{ backgroundColor: '#00bfff', borderRadius: 20 }}>
        <Text onPress={() => navigation.navigate('Dashboard')}
          style={{ fontSize: 20, color: 'black', textAlign: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 20 }}>
          Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}