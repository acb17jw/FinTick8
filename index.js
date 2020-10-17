/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { ToastAndroid } from 'react-native';
import SharedPref from './SharedPref';

SharedPref.initialse("tescik", "")
SharedPref.getString("test1")
    .then((result) => {
        console.log(result)
        ToastAndroid.show(result, ToastAndroid.LONG)
        }
    )
AppRegistry.registerComponent(appName, () => App);

