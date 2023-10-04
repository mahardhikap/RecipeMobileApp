import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import GlobalStyle from '../assets/styles/style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { sendOTP } from '../redux/actions/user/sendOTP';
import Modal from 'react-native-modal';

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { isError, errorMessage, data } = useSelector((state) => state.sendOTP);

  const [sendEmail, setSendEmail] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSendEmail = (email) => {
    setSendEmail(email);
  };

  console.log('ini send email', sendEmail)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    if (!isModalVisible && sendEmail) {
      dispatch(sendOTP(sendEmail));
    } 
    else if (!isError) {
      navigation.push('ChangePassword');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Modal isVisible={isModalVisible}>
          <View
            style={{ backgroundColor: 'white', padding: 40, borderRadius: 10 }}>
            <Text style={{fontFamily:'Poppins-Bold'}}>{data?.message || errorMessage?.message}</Text>
            <TouchableOpacity title="for hide" onPress={toggleModal} style={{backgroundColor:GlobalStyle.color_recipe.font_y, borderRadius:5, marginHorizontal:100, marginTop:10}}>
              <Text style={{padding:5, textAlign:'center', fontFamily:'Poppins-Bold',color:'white'}}>Ok</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 20,
            color: GlobalStyle.color_recipe.font_y,
            textAlign:'center'
          }}>
          Input Email to Reset:
        </Text>
        <TextInput
          placeholder="your@mail.com"
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            width:300,
            borderWidth:2,
            borderColor:GlobalStyle.color_recipe.font_y
          }}
          onChangeText={handleSendEmail}
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
        <TouchableOpacity style={{marginTop:30}} onPress={() => navigation.push('ChangePassword')}>
          <Text style={{fontFamily:'Poppins-SemiBold', color:GlobalStyle.color_recipe.font_g, textAlign:'center'}}>I have code OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;