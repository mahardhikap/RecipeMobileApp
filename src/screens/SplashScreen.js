import {Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';

import {StackActions} from '@react-navigation/native';
import GlobalStyle from '../assets/styles/style';

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
      <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 18, color:GlobalStyle.color_recipe.font_g}}>Welcome to</Text>
      <Text style={{fontFamily: 'Poppins-Bold', fontSize: 30, color:GlobalStyle.color_recipe.font_g}}>Recipe App</Text>
      <Image
        style={{marginTop: 10}}
        source={require('../assets/images/Group_697.png')}
      />
      <Text style={{fontFamily: 'Poppins-Medium', color:GlobalStyle.color_recipe.font_g}}>github.com/mahardhikap</Text>
    </View>
  );
};

export default Home;
