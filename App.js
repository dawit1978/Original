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
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
// import { Icon } from 'react-native-elements';

import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from'./screens/DetailsScreen';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


//App



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) =>(
  <HomeStack.Navigator screenOptions={{ 
        headerStyle:{
          backgroundColor:"#009387",
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:"bold"
        }
      }} >
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title:'Overview',
          headerLeft: ()=>(
            <Icon.Button 
            name="ios-menu" size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }} />
    </HomeStack.Navigator>
  );
  const DetailsStackScreen = ({navigation}) =>(
  <DetailsStack.Navigator screenOptions={{ 
        headerStyle:{
          backgroundColor:"#009387",
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:"bold"
        }
      }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen}
        options={{
           headerLeft: ()=>(
            <Icon.Button 
            name="ios-menu" size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }} />
        
      </DetailsStack.Navigator>
  );
const App = () =>{
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
      {/*  */}
    </NavigationContainer>
  );
}

export default App;