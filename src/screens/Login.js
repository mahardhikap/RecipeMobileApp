import React, { useState } from 'react';
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
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/user/login';
import GlobalStyle from '../assets/styles/style';
import { useNavigation } from "@react-navigation/native";


const { width: screenWidth } = Dimensions.get('window');

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
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginVertical: 12,
  },
});

const Login = () => {
  const navigation = useNavigation(); 
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const postDataLogin = async () => {
    dispatch(login(inputData, navigation.navigate));
  };

  const onChangeLogin = (name, value) => {
    setInputData({ ...inputData, [name]: value });
    // console.log('Login User', inputData);
  };

  return (
    <>

<ScrollView>
      <Image
        style={styles.stretch}
        source={require('../assets/images/Rectangle_63.png')}
      />
      <View style={GlobalStyle.container_bootstrap}>
        <View style={{ marginTop: 30 }}>
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
          <Text style={{ marginTop: 20 }}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Input email"
            onChangeText={(value) => onChangeLogin('email', value)}
            value={inputData.email}
          />
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Input password"
            onChangeText={(value) => onChangeLogin('password', value)}
            value={inputData.password}
          />
          <Text style={{ textAlign: 'right', fontFamily: 'Poppins-Medium' }}>
            Forgot Password?
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: GlobalStyle.color_recipe.font_y,
              borderRadius: 10,
              padding: 20,
              marginTop: 30,
            }}
            onPress={postDataLogin}>
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
          </TouchableOpacity>
        </SafeAreaView>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            marginTop: 10,
            textAlign: 'center',
          }}>
          Don’t have an account?{' '}
          <Text
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={{ color: GlobalStyle.color_recipe.font_y }}>
            Sign Up
          </Text>
        </Text>
      </View>
    </ScrollView>
    </>
  );
};

export default Login;