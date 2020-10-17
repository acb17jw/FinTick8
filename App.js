/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button, ToastAndroid
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SharedPref from "./SharedPref";
import HomeScreen from "./screens/HomeScreen";
import SpendingsScreen from "./screens/SpendingsScreen";

const App: () => React$Node = () => {
    return (
        <>
            <HomeScreen/>
            {/*<SpendingsScreen/>*/}
            {/*<StatusBar barStyle="dark-content" />*/}
            {/*<SafeAreaView>*/}
            {/*    <ScrollView*/}
            {/*        contentInsetAdjustmentBehavior="automatic"*/}
            {/*        style={styles.scrollView}>*/}
            {/*        <View style={styles.body}>*/}
            {/*            <View style={styles.sectionContainer}>*/}
            {/*                <Text style={styles.sectionTitle}>Hey</Text>*/}
            {/*                <Text style={styles.sectionDescription}>*/}
            {/*                    PLEASE*/}
            {/*                    This is a Sample project to understand how native modules work in React Native.*/}
            {/*  </Text>*/}
            {/*                <Button title={'xd'} onPress={() => {*/}
            {/*                    SharedPref.getNetflixDate()*/}
            {/*                        .then((result) => {*/}
            {/*                                console.log(result)*/}
            {/*                                ToastAndroid.show(result, ToastAndroid.LONG)*/}
            {/*                            }*/}
            {/*                        )*/}
            {/*                }}>XD</Button>*/}
            {/*            </View>*/}

            {/*        </View>*/}
            {/*    </ScrollView>*/}
            {/*</SafeAreaView>*/}
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
