import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from './src/page/Home/AccueilMaitre';
import Biblio from './src/screen/Tabs/Biblio';
import Ajoute from './src/screen/Tabs/Ajoute';
import Profile from './src/screen/Tabs/ProfilPage';
import Gestion from './src/screen/Tabs/Gestion';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerContent = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Accueil" component={Accueil} />
    <Drawer.Screen name="Biblio" component={Biblio} />
    <Drawer.Screen name="Ajoute" component={Ajoute} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Gestion" component={Gestion} />
  </Drawer.Navigator>
);

export default DrawerContent;