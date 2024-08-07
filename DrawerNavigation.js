import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import TabsMaitre from './TabsMaitre';  // Assuming this is your TabsMaitre file

import Aide from './screens/tabsMaitre/Aide';
import gereprofile from './screens/tabsMaitre/gereprofile';
import Historique from './screens/tabsMaitre/Historique';
import Parametre from './screens/tabsMaitre/Parametre';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="TabsMaitre">
      <Drawer.Screen name="TabsMaitre" component={TabsMaitre} options={{ headerShown: false }} />
      <Drawer.Screen name="Aide" component={Aide} />
      <Drawer.Screen name="gereprofile" component={gereprofile} />
      <Drawer.Screen name="Historique" component={Historique} />
      <Drawer.Screen name="Parametre" component={Parametre} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;


