import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
      title="Go to Details Screen"
      onPress={()=> navigation.navigate("Details")}
      >
      </Button>
    </View>
  );
};
export default HomeScreen;

const styles =StyleSheet.create({
  container:{
    flex:1, 
    alignItems:'center',
    justifyContent:'center'
  }
})