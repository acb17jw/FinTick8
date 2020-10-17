import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';

export default function SpendingsScreen() {
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Podsumowanie Twoich wydatków</Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image
            source={{
              uri:
                'https://i.ibb.co/LYvRHMy/980-ADD38-9-CB8-4254-B30-B-7568-ED01733-F.png',
            }} 
            style={styles.buttonImageIconStyle}/>
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 300,
    width: 300,
    resizeMode: 'stretch',
  }
  
});
