import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
       <Text>Details Screen</Text>
    
     <Button title="Go to Details Screen ...again"
      onPress={()=>navigation.push("Details")}
          >
     </Button> 
     <Button title="Go to Home"
      onPress={()=>navigation.navigate("Home")}
          >
     </Button>
     <Button title="Go to Details Screen"
      onPress={()=>navigation.goBack()}
          >
     </Button>
     <Button title="Go to Details Screen"
      onPress={()=>navigation.popToTop()}
           >
      </Button>
      </View>
  );
};
export default DetailsScreen;

const styles = StyleSheet.create({
  container:{
    flex:1, 
    alignItems:'center',
    justifyContent:'center'
  }
  })