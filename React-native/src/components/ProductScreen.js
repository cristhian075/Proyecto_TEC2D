import * as React from 'react';
import { View, Text, ImageBackground, FlatList, SafeAreaView, StatusBar } from 'react-native';

const image1 = { uri: "https://www.wallpapertip.com/wmimgs/40-405583_high-resolution-white-background-hd.jpg" };
const DATA = [
  {
    id: '0',
    title: 'Tubo Cobre de Gas Tipo L 1/2 X 1M',
    title2: '$14,400',
  },
  {
    id: '1',
    title: 'Tubo Cobre de Gas Tipo L 3/4 X 1M',
    title2: '$26,400',
  },
  {
    id: '2',
    title: 'Gas Refrigerante R134a Du',
    title2: '$15,900',
  },{
    id: '3',
    title: 'Gas Refrigerante R600a Ne',
    title2: '$15,500',
  },{
    id: '4',
    title: 'Aislamiento Tubería X1 Blanco + Tubería De cobre 1/4+3/8',
    title2: '$52,000',
  },{
    id: '5',
    title: 'Cinta Foam Aire Acondicionado',
    title2: '$22,000',
  },
];

const Item = ({ title, title2 }) => (
  <View style={{backgroundColor: '#D9D8D9', padding: 20, marginVertical: 8, marginHorizontal: 16, borderRadius: 20}}>
    <Text style={{fontSize: 32}}>{title}</Text>
    <Text style={{fontSize: 20}}>{title2}</Text>
  </View>
);

export default function ProductScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Item title={item.title}  title2={item.title2} />
  );
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <ImageBackground source={image1} style={{ flex: 1, resizeMode: "cover", justifyContent: "space-around" }}>
        <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight || 0,}}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}