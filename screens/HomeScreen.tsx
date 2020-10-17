import * as React from 'react';
import { StyleSheet, SafeAreaView, Button, Image} from 'react-native';
import { ListItem, Icon, Avatar} from 'react-native-elements'

import { Text, View } from '../components/Themed';
import List from '../components/ButtonList';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Twoje Subskrybcje:</Text>

     <List />
          
    </View>
  );
}
const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
]


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
  },
 
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  title2:{
    height: 240,
    fontSize: 20,
    fontWeight: 'bold',
  }
  
});
