import {Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';

import {StackActions} from '@react-navigation/native';

const Home = ({navigation}) => {
  React.useEffect(() => {
    try {
      async function alreadyLogin() {
        const token = await AsyncStorage.getItem('token');
        setTimeout(() => {
          if (token) {
            navigation.dispatch(StackActions.replace('IndexRoute'));
          } else {
            navigation.dispatch(StackActions.replace('Login'));
          }
        }, 500);
      }
      alreadyLogin();
    } catch (error) {
      console.log(error);
    }
    return () => clearTimeout();
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'semibold', fontSize: 18}}>Welcome to</Text>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Recipe App</Text>
      <Image
        style={{marginTop: 10}}
        source={require('../assets/images/Group_697.png')}
      />
    </View>
  );
};

export default Home;
