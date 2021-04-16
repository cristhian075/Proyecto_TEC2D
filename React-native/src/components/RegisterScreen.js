import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen({ navigation }) {
    return (
      <View style={{ flex: 1, margin: 10, marginTop: 30, padding: 30, justifyContent: "center" }}>
        <TextInput
          placeholder={'Nombre completo'}
          underlineColorAndroid="transparent"
          style={{ textAlign: 'center', height: 40, borderWidth: 0.5, marginTop: 10, marginBottom: 10, fontSize: 20, borderColor: 'black', borderWidth: 2, borderRadius: 20 }} />
        <TextInput
          placeholder={'Correo'}
          underlineColorAndroid="transparent"
          style={{ textAlign: 'center', height: 40, borderWidth: 0.5, marginTop: 10, marginBottom: 10, fontSize: 20, borderColor: 'black', borderWidth: 2, borderRadius: 20 }} />
        <TextInput
          placeholder={'Nombre Usuario'}
          underlineColorAndroid="transparent"
          style={{ textAlign: 'center', height: 40, borderWidth: 0.5, marginTop: 10, marginBottom: 10, fontSize: 20, borderColor: 'black', borderWidth: 2, borderRadius: 20 }} />
        <TextInput
          placeholder={'Contraseña'}
          underlineColorAndroid="transparent"
          style={{ textAlign: 'center', height: 40, borderWidth: 0.5, marginTop: 10, marginBottom: 10, fontSize: 20, borderColor: 'black', borderWidth: 2, borderRadius: 20 }} />
        <TouchableOpacity
          onPress={() => alert('Gracias por registrarse ;)')}
          style={{ backgroundColor: '#33ccff', borderRadius: 20 }}>
          <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 20 }}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    );
  }
  