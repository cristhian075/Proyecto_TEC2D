import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BorderlessButton } from 'react-native-gesture-handler';

import InicioScreen from './src/components/InicioScreen';
import InformacioScreen from './src/components/InformacioScreen';
import ContactenosScreen from './src/components/ContactenosScreen';
import ProductScreen from './src/components/ProductScreen';
import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/RegisterScreen';
import DashboardScreen from './src/components/DashboardScreen';
import Vista1 from './src/components/Vista1';
import Vista2 from './src/components/Vista2';
import Vista3 from './src/components/Vista3';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={InicioScreen} />
        <Drawer.Screen name="Informacion" component={InformacioScreen} />
        <Drawer.Screen name="Contactenos" component={ContactenosScreen} />
        <Drawer.Screen name="Productos" component={ProductScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Registrarse" component={RegisterScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Vista1" component={Vista1} />
        <Drawer.Screen name="Vista2" component={Vista2} />
        <Drawer.Screen name="Vista3" component={Vista3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}