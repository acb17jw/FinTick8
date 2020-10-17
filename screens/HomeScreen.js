import React,{Component} from 'react';
import { StyleSheet, SafeAreaView, Button, Image, View, Text} from 'react-native';

import List from '../components/ButtonList';
export default class HomeScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Twoje Subskrybcje:</Text>

          <List />

        </View>
    );
  }
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
