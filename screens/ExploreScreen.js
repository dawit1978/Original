import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';

const ExploreScreen = ({navigation}) =>{
     return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Explore Screen</Text>
      <Button 
      title="Go to Explore Screen"
      onPress={()=> navigation.navigate("Home")}
      >
      </Button>
    </View>
  );
};
export default ExploreScreen;

const styles = StyleSheet.create({
  container:{
    flex:1, 
    alignItems:'center',
    justifyContent:'center'
  }
  })