import {Text, View, Image} from 'react-native';
import * as React from 'react';

import {StackActions} from '@react-navigation/native';

const Home = ({navigation}) => {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.dispatch(StackActions.replace('Login'));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight:'semibold', fontSize:18}}>Welcome to</Text>
      <Text style={{fontWeight:'bold', fontSize:30}}>Recipe App</Text>
      <Image
      style={{marginTop:10}}
      source={require('../assets/images/Group_697.png')}
    />
    </View>
  );
};

export default Home;