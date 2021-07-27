import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';

const ProfileScreen = ({navigation}) =>{
     return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button 
      title="Go to profile Screen"
      onPress={()=> navigation.navigate("Home")}
      >
      </Button>
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container:{
    flex:1, 
    alignItems:'center',
    justifyContent:'center'
  }
  })