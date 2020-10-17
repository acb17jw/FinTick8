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
            <ScrollView>
            <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'data:image/png;base64,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',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
           Smart (8.99zł)         aktywny: 10 dni temu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://dailyweb.pl/wp-content/uploads/2017/04/netflix-icon-e1566333571178.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Netflix (43.00zł)       aktywny: 30 dni temu
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonHBOStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'data:image/png;base64,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',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            HBO GO (35.99zł)  aktywny: 70 dni temu
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.    buttonSpotifyStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://images.idgesg.net/images/article/2018/11/spotify-logo-100779042-large.3x2.jpg',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Spotify (19.99zł)     aktywny: 2 dni temu
          </Text>
        </TouchableOpacity>

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
      backgroundColor: 'black',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonHBOStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#0F0F0F',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonFacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FE6613',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonSpotifyStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1BD75F',
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