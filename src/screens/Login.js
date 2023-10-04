import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TextInput,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/actions/user/login';
import GlobalStyle from '../assets/styles/style';
import {useNavigation} from '@react-navigation/native';

const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  stretch: {
    width: screenWidth,
    height: 240,
    resizeMode: 'cover',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  input: {
    height: 60,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: GlobalStyle.color_recipe.font_y,
    width: '100%',
    marginVertical: 12,
    backgroundColor:'white'
  },
});

const Login = () => {
  const navigation = useNavigation();
  const {errorMessage, isLoading} = useSelector(state => state.loginUser);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const postDataLogin = async () => {
    dispatch(login(inputData, navigation.navigate));
  };

  const onChangeLogin = (name, value) => {
    setInputData({...inputData, [name]: value});
    // console.log('Login User', inputData);
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
        <Image
          style={styles.stretch}
          source={require('../assets/images/Rectangle_63.png')}
        />
        <View style={GlobalStyle.container_bootstrap}>
          <View style={{marginTop: 30}}>
            <Text
              style={{
                color: GlobalStyle.color_recipe.font_y,
                textAlign: 'center',
                fontSize: 30,
                fontFamily: 'Poppins-Bold',
              }}>
              Welcome
            </Text>
            <Text
              style={{
                color: GlobalStyle.color_recipe.font_g,
                textAlign: 'center',
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
              }}>
              Login into your existing account!
            </Text>
          </View>
          <SafeAreaView>
            <Text
              style={{
                color: 'red',
                textAlign: 'center',
                fontSize: 12,
                fontFamily: 'Poppins-Medium',
                // backgroundColor: 'grey',
                borderRadius: 10,
                paddingVertical: 5,
              }}>
              {errorMessage ? errorMessage?.message : ''}
            </Text>
            <Text style={{marginTop: 20, fontFamily: 'Poppins-Medium'}}>
              Email
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Input email"
              onChangeText={value => onChangeLogin('email', value)}
              value={inputData.email}
            />
            <Text style={{fontFamily: 'Poppins-Medium'}}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Input password"
              onChangeText={value => onChangeLogin('password', value)}
              value={inputData.password}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={() => navigation.push('ActivateUser')}>
                <Text style={{fontFamily: 'Poppins-Medium'}}>
                  Activate User?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.push('ForgetPassword')}>
                <Text style={{fontFamily: 'Poppins-Medium'}}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: GlobalStyle.color_recipe.font_y,
                borderRadius: 10,
                padding: 20,
                marginTop: 30,
              }}
              onPress={postDataLogin}>
              {isLoading === true ? (
                <ActivityIndicator size="small" color={'white'} />
              ) : (
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontFamily: 'Poppins-Bold',
                  }}>
                  LOGIN
                </Text>
              )}
            </TouchableOpacity>
          </SafeAreaView>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              marginTop: 10,
              textAlign: 'center',
              marginBottom: 50,
            }}>
            Don’t have an account?{' '}
            <Text
              onPress={() => {
                navigation.navigate('Register');
              }}
              style={{color: GlobalStyle.color_recipe.font_y}}>
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;
