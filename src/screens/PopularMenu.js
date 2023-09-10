import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import GlobalStyle from '../assets/styles/style';
import {useNavigation} from '@react-navigation/native';

const PopularMenu = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={GlobalStyle.container_bootstrap}>
        <View style={{marginTop: 40}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {navigation.navigate('IndexRoute')}}>
              <View>
                <Image source={require('../assets/images/Group_51.png')} />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: GlobalStyle.color_recipe.font_y,
                fontFamily: 'Poppins-Bold',
                fontSize: 25,
                marginLeft: 60,
              }}>
              Popular Menu
            </Text>
          </View>
          <View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#00E092',
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                style={{width: 120, height: 120, resizeMode: 'cover'}}
                source={require('../assets/images/Rectangle_10.png')}
              />
              <View
                style={{flexDirection: 'column', marginLeft: 10, width: 140}}>
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 20}}>
                  Margherita
                </Text>
                <Text style={{fontFamily: 'Poppins-Medium', fontSize: 18}}>
                  Main Course
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: 90,
                  }}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../assets/images/user.png')}
                  />
                  <Text style={{fontFamily: 'Poppins-Bold'}}>
                    Mahardhika Putra Pratama
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: 90,
                  justifyContent: 'space-between',
                  marginLeft: 5,
                }}>
                <Image
                  source={require('../assets/images/Group_86.png')}
                  style={{width: 40, height: 40}}
                />
                <Image
                  source={require('../assets/images/Group_87.png')}
                  style={{width: 40, height: 40}}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#00E092',
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                style={{width: 120, height: 120, resizeMode: 'cover'}}
                source={require('../assets/images/Rectangle_10.png')}
              />
              <View
                style={{flexDirection: 'column', marginLeft: 10, width: 140}}>
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 20}}>
                  Margherita
                </Text>
                <Text style={{fontFamily: 'Poppins-Medium', fontSize: 18}}>
                  Main Course
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: 90,
                  }}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../assets/images/user.png')}
                  />
                  <Text style={{fontFamily: 'Poppins-Bold'}}>
                    Mahardhika Putra Pratama
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: 90,
                  justifyContent: 'space-between',
                  marginLeft: 5,
                }}>
                <Image
                  source={require('../assets/images/Group_86.png')}
                  style={{width: 40, height: 40}}
                />
                <Image
                  source={require('../assets/images/Group_87.png')}
                  style={{width: 40, height: 40}}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#00E092',
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                style={{width: 120, height: 120, resizeMode: 'cover'}}
                source={require('../assets/images/Rectangle_10.png')}
              />
              <View
                style={{flexDirection: 'column', marginLeft: 10, width: 140}}>
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 20}}>
                  Margherita
                </Text>
                <Text style={{fontFamily: 'Poppins-Medium', fontSize: 18}}>
                  Main Course
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: 90,
                  }}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../assets/images/user.png')}
                  />
                  <Text style={{fontFamily: 'Poppins-Bold'}}>
                    Mahardhika Putra Pratama
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: 90,
                  justifyContent: 'space-between',
                  marginLeft: 5,
                }}>
                <Image
                  source={require('../assets/images/Group_86.png')}
                  style={{width: 40, height: 40}}
                />
                <Image
                  source={require('../assets/images/Group_87.png')}
                  style={{width: 40, height: 40}}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#00E092',
                padding: 10,
                borderRadius: 10,
              }}>
              <Image
                style={{width: 120, height: 120, resizeMode: 'cover'}}
                source={require('../assets/images/Rectangle_10.png')}
              />
              <View
                style={{flexDirection: 'column', marginLeft: 10, width: 140}}>
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 20}}>
                  Margherita
                </Text>
                <Text style={{fontFamily: 'Poppins-Medium', fontSize: 18}}>
                  Main Course
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: 90,
                  }}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../assets/images/user.png')}
                  />
                  <Text style={{fontFamily: 'Poppins-Bold'}}>
                    Mahardhika Putra Pratama
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: 90,
                  justifyContent: 'space-between',
                  marginLeft: 5,
                }}>
                <Image
                  source={require('../assets/images/Group_86.png')}
                  style={{width: 40, height: 40}}
                />
                <Image
                  source={require('../assets/images/Group_87.png')}
                  style={{width: 40, height: 40}}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PopularMenu;
