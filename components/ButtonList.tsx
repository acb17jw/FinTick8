import React, { Component } from 'react'
import {Provider as PaperProvider} from 'react-native-paper'
import { Text, ScrollView, TouchableOpacity, StyleSheet, Image, View } from 'react-native'
import { Button } from 'react-native-paper';   
import { SafeAreaView } from 'react-native-safe-area-context';
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Netflix',
         },
         {
            id: 1,
            name: 'HBO GO',
         },
         {
            id: 2,
            name: 'SPOTIFY',
         },
         {
            id: 3,
            name: 'Allegro',
         },
         {
            id: 4,
            name: 'Netflix',
         },
         {
            id: 5,
            name: 'HBO GO',
         },
         {
            id: 6,
            name: 'SPOTIFY',
         },
         {
            id: 7,
            name: 'Allegro',
         },
         {
            id: 8,
            name: 'Allegro',
         },
         {
            id: 9,
            name: 'Allegro',
         },
         {
            id: 10,
            name: 'Allegro',
         },
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         <PaperProvider>
            <SafeAreaView style={{height:'92%'}}>
           
               <ScrollView style={{width: 320,}}>
                  {
                     this.state.names.map((item, index) => (
                        <Button
                           mode="outlined"
                           style={{       flexDirection: 'row', 
                                          height: 50, 
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          marginTop: 5,}}
                           key = {item.id}
                           onPress = {() => this.alertItemName(item)}>
                           <Text style = {styles.text}>
                              {item.name}
                           </Text>
                        
                        </Button>
                        
                     ))
                  }
               </ScrollView>
            </SafeAreaView>
         </PaperProvider>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   },
   buttonGPlusStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#dc4e41',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonFacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#485a96',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
    },
    buttonTextStyle: {
      color: '#fff',
      marginBottom: 4,
      marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
      backgroundColor: '#fff',
      width: 1,
      height: 40,
    },
})