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
  import React from 'react';
  import GlobalStyle from '../assets/styles/style';
  
  const {width: screenWidth} = Dimensions.get('window');
  
  const styles = StyleSheet.create({
    stretch: {
      width: screenWidth,
      height: 240,
      resizeMode: 'cover',
      borderBottomLeftRadius:10,
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
  
  const Register = ({navigation}) => (
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
            Register to Recipe App
          </Text>
        </View>
        <SafeAreaView>
          <Text style={{marginTop: 20}}>Username</Text>
          <TextInput style={styles.input} placeholder="Input username" />
          <Text>Email</Text>
          <TextInput style={styles.input} placeholder="Input email" />
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Input password"
          />
          <Text style={{textAlign: 'right', fontFamily: 'Poppins-Medium'}}>
            Forgot Password?
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: GlobalStyle.color_recipe.font_y,
              borderRadius: 10,
              padding: 20,
              marginTop: 30,
            }}
            onPress={() => {
              navigation.navigate('SplashScreen');
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'Poppins-Bold',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
        <Text style={{fontFamily: 'Poppins-Medium', marginTop: 10, textAlign:'center'}}>
          Have an account?{' '}
          <Text
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={{color: GlobalStyle.color_recipe.font_y}}>
            Sign In
          </Text>
        </Text>
      </View>
  
      {/* <TouchableOpacity onPress={() => navigation.pop()}>
        <Text>Go back</Text>
      </TouchableOpacity> */}
      {/* <Text>Login</Text> */}
    </ScrollView>
  );
  
  export default Register;
  