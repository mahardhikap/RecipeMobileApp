import {ScrollView, View, Text, Dimensions, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalStyle from '../assets/styles/style';
import {withTheme} from 'react-native-elements';

const {width: screenWidth} = Dimensions.get('window');
const Profile = () => {
  return (
    <View>
      <View>
        <View
          style={{
            backgroundColor: GlobalStyle.color_recipe.font_y,
            width: screenWidth,
            height: 250,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/images/Ellipse_50.png')}
            style={{marginTop: 50}}
          />
          <Text
            style={{
              color: 'white',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 20,
              marginTop: 10,
            }}>
            User Account
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 550,
            borderRadius: 20,
            marginTop: -50,
            marginHorizontal: 10,
          }}>
          <View style={{padding:20, flexDirection:'row'}}>
            <Image source={require('../assets/images/Group.png')}/>
            <Text style={{fontSize:15, fontFamily:'Poppins-SemiBold', marginLeft: 20}}>Edit Profile</Text>
          </View>
          <View style={{padding:20, flexDirection:'row'}}>
            <Image source={require('../assets/images/award.png')}/>
            <Text style={{fontSize:15, fontFamily:'Poppins-SemiBold', marginLeft: 20}}>My Recipe</Text>
          </View>
          <View style={{padding:20, flexDirection:'row'}}>
            <Image source={require('../assets/images/Group_5.png')}/>
            <Text style={{fontSize:15, fontFamily:'Poppins-SemiBold', marginLeft: 20}}>Saved Recipe</Text>
          </View>
          <View style={{padding:20, flexDirection:'row'}}>
            <Image source={require('../assets/images/Vector.png')}/>
            <Text style={{fontSize:15, fontFamily:'Poppins-SemiBold', marginLeft: 20}}>Liked Recipe</Text>
          </View>
        </View>
      </View>
      <Text></Text>
    </View>
  );
};

export default Profile;
