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
} from 'react-native';
import React, {useState} from 'react';
import GlobalStyle from '../assets/styles/style';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../redux/actions/user/register';
import Modal from 'react-native-modal';

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

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {errorMessage, isError} = useSelector(state => state.register);
  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isModalVisible, setModalVisible] = useState(false);

  const postDataRegister = async () => {
    dispatch(register(inputData, navigation.navigate));
  };

  const onChangeRegister = (name, value) => {
    setInputData({...inputData, [name]: value});
    // console.log('Login User', inputData);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    if (!isModalVisible) {
      postDataRegister();
    } else if (!isError) {
        navigation.navigate('ActivateUser');
    }
  };

  return (
    <ScrollView>
      <StatusBar translucent backgroundColor="transparent" />
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
          <Text style={{marginTop: 20, fontFamily: 'Poppins-Medium'}}>
            Username
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Input username"
            onChangeText={value => onChangeRegister('username', value)}
            value={inputData.username}
          />
          <Text style={{fontFamily: 'Poppins-Medium'}}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Input email"
            onChangeText={value => onChangeRegister('email', value)}
            value={inputData.email}
          />
          <Text style={{fontFamily: 'Poppins-Medium'}}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Input password"
            onChangeText={value => onChangeRegister('password', value)}
            value={inputData.password}
          />
          <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')}>
            <Text style={{textAlign: 'right', fontFamily: 'Poppins-Medium'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>toggleModal()}
            style={{
              backgroundColor: GlobalStyle.color_recipe.font_y,
              borderRadius: 10,
              padding: 20,
              marginTop: 30,
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
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            marginTop: 10,
            textAlign: 'center',
            marginBottom: 50,
          }}>
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
      <View>
        <Modal isVisible={isModalVisible}>
          <View
            style={{ backgroundColor: 'white', padding: 40, borderRadius: 10 }}>
            <Text style={{fontFamily:'Poppins-Bold'}}>{errorMessage?.message || 'Register success, check email for verification!'}</Text>
            <TouchableOpacity title="email" onPress={toggleModal} style={{backgroundColor:GlobalStyle.color_recipe.font_y, borderRadius:5, marginHorizontal:100, marginTop:10}}>
              <Text style={{padding:5, textAlign:'center', fontFamily:'Poppins-Bold', color:'white'}}>Ok</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default Register;
