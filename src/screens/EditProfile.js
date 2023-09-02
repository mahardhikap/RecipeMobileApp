import {View, TouchableOpacity, Image, Text, TextInput} from 'react-native';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import GlobalStyle from '../assets/styles/style';

const EditProfile = () => {
  return (
    <View style={GlobalStyle.container_bootstrap}>
      <View style={{marginTop: 30}}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Poppins-Bold',
            textAlign: 'center',
            color: GlobalStyle.color_recipe.font_y,
          }}>
          Edit Profile
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 120, height: 120}}
            source={{uri: 'https://i.ibb.co/M2JSRmW/noimage.png'}}
          />
          <Text style={{fontFamily:'Poppins-Medium'}}>Change Photo Profile</Text>
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontFamily:'Poppins-Medium'}}>Name</Text>
          <TextInput
            style={{backgroundColor: '#FFFFFF', borderRadius: 10, padding: 10}}
          />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontFamily:'Poppins-Medium'}}>Email</Text>
          <TextInput
            style={{backgroundColor: '#FFFFFF', borderRadius: 10, padding: 10}}
          />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontFamily:'Poppins-Medium'}}>Password</Text>
          <TextInput
            style={{backgroundColor: '#FFFFFF', borderRadius: 10, padding: 10}}
          />
        </View>
        <View style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:50}}>
            <TouchableOpacity style={{backgroundColor:'#30C0F3', width:100, borderRadius:10}}>
                <Text style={{padding:10, textAlign:'center', color:'white', fontFamily:'Poppins-Bold'}}>Save</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
