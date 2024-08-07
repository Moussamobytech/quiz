


import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/page/Home/Login';
import Bienvenue from './src/page/Home/Bienvenue';
import CreerCompte from './src/page/Home/CreerCompte';
import Choisir from './src/page/Home/Choisir';
import Siginup from './src/page/Home/Siginup';
import Accueil from './src/page/Home/Accueil';
import Php from './src/page/Home/Php';
import TabsMaitre from './navigationMaitre/TabsMaitre';
import Tabs from './navigation/Tabs';
import AccueilMaitre from './src/page/Home/AccueilMaitre';
import Resultat from './src/page/Home/QuizDispo';
import Score from './screen/Tabs/Score';
import loginmaitre from './src/page/Home/loginmaitre';
import maitrelogsing from './src/page/Home/maitrelogsing';
import SignupMaitre from './src/page/Home/singupmaitre';
import EditQuiz from './src/page/Home/EditQuiz';
import DrawerNavigator from './DrawerNavigation';
import { AuthProvider } from './screen/Tabs/AuthContext';
import ProfilPage from './screen/Tabs/ProfilPage';
import DrawerContent from './DrawerContent';
import Menu from './src/page/Home/Menu';
import Logo from './src/page/Home/Logo';
import Apropos from './src/page/Home/Apropos';
import QuizDispo from './src/page/Home/QuizDispo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Logo" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Accueil" component={Accueil} /> */}
          <Stack.Screen name="AccueilMaitre" component={AccueilMaitre} />
          <Stack.Screen 
          name="Apropos" 
          component={Apropos} 
          options={{ 
            title: 'À propos', 
            headerShown: true,
            headerTransparent: true, 
            headerTintColor: '#000', 
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
          {/* <Stack.Screen name="Logo" component={Logo} /> */}
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={({ navigation }) => ({
              headerTitle: 'Menu',
              headerTitleAlign: 'center',
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require("./assets/ferme.png")}
                    style={{ width: 24, height: 24, marginRight: 20 }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
           <Stack.Screen
            name="QuizDispo"
            component={QuizDispo}
            options={{ headerShown: true, 
              headerTransparent: true, 
              headerTintColor: '#000', 
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitle: 'Les Techquiz', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Score"
            component={Score}
            options={{ headerShown: true, headerTitle: 'Les Techquiz', headerTitleAlign: 'center' }}
          />
          {/* Décommentez les écrans nécessaires ici */}
          {/* <Stack.Screen name="Bienvenue" component={Bienvenue} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreerCompte" component={CreerCompte} />
          <Stack.Screen name="Choisir" component={Choisir} />
          <Stack.Screen name="Siginup" component={Siginup} />
          <Stack.Screen name="loginmaitre" component={loginmaitre} />
          <Stack.Screen name="maitrelogsing" component={maitrelogsing} />
          <Stack.Screen name="singupmaitre" component={SignupMaitre} />
         
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="TabsMaitre" component={TabsMaitre} />
         
          <Stack.Screen
            name="php"
            component={Php}
            options={{ headerShown: true, headerTitle: 'Python', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="EditQuiz"
            component={EditQuiz}
            options={{ headerShown: true, headerTitle: 'Edit Quiz', headerTitleAlign: 'center' }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
