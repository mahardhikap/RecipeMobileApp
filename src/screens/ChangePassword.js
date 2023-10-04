import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import GlobalStyle from '../assets/styles/style';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {changePassword} from '../redux/actions/user/changePassword';
import Modal from 'react-native-modal';

const InputOTP = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {isError, errorMessage, data} = useSelector(
    state => state.changePassword,
  );
  const [isModalVisible, setModalVisible] = useState(false);

  const [inputData, setInputData] = useState({
    password: '',
    email: '',
    validate: '',
  });

  const postChangePassword = async () => {
    dispatch(changePassword(inputData));
  };

  const onChangePassword = (name, value) => {
    setInputData({...inputData, [name]: value});
    // console.log('Login User', inputData);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    if (!isModalVisible) {
      postChangePassword();
    } else if (!isError) {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Modal isVisible={isModalVisible}>
          <View
            style={{backgroundColor: 'white', padding: 40, borderRadius: 10}}>
            <Text style={{fontFamily: 'Poppins-Bold'}}>
              {data?.message || errorMessage?.message}
            </Text>
            <TouchableOpacity
              title="for hide"
              onPress={toggleModal}
              style={{
                backgroundColor: GlobalStyle.color_recipe.font_y,
                borderRadius: 5,
                marginHorizontal: 100,
                marginTop: 10,
              }}>
              <Text
                style={{
                  padding: 5,
                  textAlign: 'center',
                  fontFamily: 'Poppins-Bold',
                  color:'white'
                }}>
                Ok
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <View style={{marginHorizontal: 10}}>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 20,
            color: GlobalStyle.color_recipe.font_y,
            textAlign: 'center',
          }}>
          Change Password:
        </Text>
        <Text style={{marginTop: 20, fontFamily: 'Poppins-Medium'}}>
          Input New Password
        </Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: GlobalStyle.color_recipe.font_y,
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: 'white',
            width: 250,
          }}
          placeholder="Input new password"
          onChangeText={value => onChangePassword('password', value)}
          value={inputData.password}
        />
        <Text style={{fontFamily: 'Poppins-Medium'}}>Email</Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: GlobalStyle.color_recipe.font_y,
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: 'white',
            width: 250,
          }}
          placeholder="Input email valid"
          onChangeText={value => onChangePassword('email', value)}
          value={inputData.email}
        />
        <Text style={{fontFamily: 'Poppins-Medium'}}>Code OTP</Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: GlobalStyle.color_recipe.font_y,
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: 'white',
            width: 250,
          }}
          placeholder="Input code OTP"
          onChangeText={value => onChangePassword('validate', value)}
          value={inputData.validate}
        />
        <TouchableOpacity
          style={{
            backgroundColor: GlobalStyle.color_recipe.font_y,
            borderRadius: 10,
            marginTop: 10,
            marginHorizontal: 40,
          }}
          onPress={toggleModal}>
          <Text
            style={{
              paddingVertical: 10,
              textAlign: 'center',
              fontFamily: 'Poppins-Bold',
              color:'white'
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputOTP;
