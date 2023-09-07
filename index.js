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

//import one signal
import { LogLevel, OneSignal } from 'react-native-onesignal';
// OneSignal Initialization
OneSignal.initialize(ONESIGNAL_APP_ID);
OneSignal.Debug.setLogLevel(LogLevel.Verbose);

// requestPermission will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for notification permission
OneSignal.Notifications.requestPermission(true);

// Method for listening for notification clicks
OneSignal.Notifications.addEventListener('click', (event) => {
  console.log('OneSignal: notification clicked:', event);
});

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
