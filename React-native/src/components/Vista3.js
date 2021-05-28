import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Vista3({ navigation }) {
    return (
      <View style={{ flex: 1, margin: 10, marginTop: 30, padding: 30, justifyContent: "center" }}>
          <Text>Soy vista3</Text>
          <Button 
         title="Regresar"
         onPress={() =>navigation.navigate('Vista1')}>
           
       </Button>
        
      </View>
    );
  }