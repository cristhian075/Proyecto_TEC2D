import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function InformacioScreen({ navigation }) {
    return (
      <View>
        <Image source={{ uri: 'https://bzns.media/upload/iblock/803/803d947cc5a218c36cc96898f2c730cf.jpg?2503051477237240' }}
          style={{ width: 412, height: 400 }} />
        <Text style={{ color: "black", fontSize: 30, fontWeight: "bold", textAlign: "left" }}>Empresa</Text>
        <Text style={{ color: "black", fontSize: 15, fontWeight: "normal", textAlign: "left" }}>
          En SERVIGAS del Huila contamos con un equipo de técnicos en Neiva
          especializados en instalaciones de redes de gas y refrigeración,
          especialistas que brindan un servicio de calidad con atención personalizada y a domicilio.
          Nuestra experiencia está respaldada por más de 400 clientes satisfechos por
          nuestros servicios en instalaciones de redes de gas mantenimiento y reparación de gasodomesticos,
          reparación de Neveras y aires acondicionados, realizamos reparaciones a todas las
          marcas y modelos: LG, Mabe, Haceb, Samsung, Philips, Olimpo, entre otros.
          Nuestros servicios técnicos se caracteriza por la calidad en la atención y en las
          reparaciones que realizan nuestros técnicos.</Text>
        <Text style={{ color: "black", fontSize: 15, fontWeight: "normal", textAlign: "left" }}>
          No dudes en contactarnos, te brindaremos en el mejor servicio.</Text>
        <Text></Text>
        <TouchableOpacity
          onPress={() => alert('')}
          style={{ backgroundColor: '#00bfff', borderRadius: 20 }}>
          <Text onPress={() => navigation.navigate('Contactenos')}
            style={{ fontSize: 25, color: 'black', textAlign: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 20 }}>
            Contactenos</Text>
        </TouchableOpacity>
      </View>
    );
  }
  