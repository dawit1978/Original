/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen'
// import Icon from 'react-native-vector-icons/Ionicons';
// import { Icon } from 'react-native-elements';

import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
} from 'react-native';

// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from'./screens/DetailsScreen';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


//App



// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const App = () =>{
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
      </Drawer.Navigator>
      {/*  */}
    </NavigationContainer>
  );
}

export default App;