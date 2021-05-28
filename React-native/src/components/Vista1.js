import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Vista1({ navigation }) {
  return (
    <View style={{ flex: 1, margin: 10, marginTop: 30, padding: 30, justifyContent: "center" }}>
        <Text >Soy vista uno</Text>
      <TextInput
        placeholder={'Usuario'}
        underlineColorAndroid="transparent"
        style={{ textAlign: 'center', height: 40, borderWidth: 0.5, marginTop: 60, marginBottom: 10, fontSize: 20, borderColor: 'black'}} />
      <TextInput
        placeholder={'Contraseña'}
        secureTextEntry={true}
        underlineColorAndroid="transparent"
        style={{ textAlign: 'center', height: 40, borderWidth: 0.5, marginTop: 10, marginBottom: 10, fontSize: 20, borderColor: 'black'}} />
      <TextInput
        placeholder={'Confirmar ontraseña'}
        secureTextEntry={true}
        underlineColorAndroid="transparent"
        style={{ textAlign: 'center', height: 40, borderWidth: 0.5, marginTop: 10, marginBottom: 10, fontSize: 20, borderColor: 'black'}} />

       <View style={{ flex: 1, margin: 10, marginTop: 30, padding: 30, justifyContent: "center" }}>
       <Button 
         title="vista2"
         onPress={() =>navigation.navigate('Vista2')}>
       </Button>
       <Button 
         title="vista3"
         onPress={() =>navigation.navigate('Vista3')}>
       </Button>
       </View>
    </View>
  );
}