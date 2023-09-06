import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import GlobalStyle from '../assets/styles/style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { activateUser } from '../redux/actions/user/activateUser';
import Modal from 'react-native-modal';

const ActivateUser = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { isError, errorMessage, data } = useSelector((state) => state.activateUser);

  const [activationCode, setActivationCode] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleActivationCodeChange = (text) => {
    setActivationCode(text);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    if (!isModalVisible && activationCode) {
      dispatch(activateUser(activationCode));
    } else if (!isError) {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Modal isVisible={isModalVisible}>
          <View
            style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>{errorMessage.message || 'Activation success! You can login now.'}</Text>
            <TouchableOpacity title="Hide modal" onPress={toggleModal} style={{backgroundColor:GlobalStyle.color_recipe.font_y, borderRadius:5, marginHorizontal:100, marginTop:10}}>
              <Text style={{padding:5, textAlign:'center'}}>Ok</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
            color: GlobalStyle.color_recipe.font_y,
          }}>
          Input Code Activate:
        </Text>
        <TextInput
          placeholder="Input code here"
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
          }}
          onChangeText={handleActivationCodeChange}
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
              fontFamily: 'Poppins-Medium',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActivateUser;