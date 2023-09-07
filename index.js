/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import storages from './src/redux/store';
import React from 'react';
import IndexRoute from './src/IndexRoute';
import AppNavigator from './src/NavContainer';
import {ONESIGNAL_APP_ID} from "@env"

//code one signal
import { LogLevel, OneSignal } from 'react-native-onesignal';
OneSignal.initialize(ONESIGNAL_APP_ID);
OneSignal.Debug.setLogLevel(LogLevel.Verbose);
OneSignal.Notifications.requestPermission(true);
OneSignal.Notifications.addEventListener('click', (event) => {
  console.log('OneSignal: notification clicked:', event);
});
//end of one signal code

const {store, persistor} = storages();

function AppWrapper() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => AppWrapper);
