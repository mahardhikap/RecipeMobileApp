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
