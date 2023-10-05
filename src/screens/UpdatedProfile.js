import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalStyle from '../assets/styles/style';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {logout} from '../redux/actions/user/logout';
import {useDispatch} from 'react-redux';
import {updateUser} from '../redux/actions/user/updateUser';
import Modal from 'react-native-modal';

const {width: screenWidth} = Dimensions.get('window');
const UpdatedProfile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {data} = useSelector(state => state.updateUser);
  const [modalVisible, setModalVisible] = useState(false);

  const userLogout = () => {
    dispatch(logout(navigation.navigate));
  };
  useEffect(() => {
    dispatch(updateUser());
  }, []);
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
            source={{
              uri: data?.photo || 'https://i.ibb.co/M2JSRmW/noimage.png',
            }}
            style={{
              marginTop: 50,
              resizeMode: 'cover',
              width: 90,
              height: 90,
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              color: 'white',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 20,
              marginTop: 10,
            }}>
            {data?.username}
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile');
            }}>
            <View
              style={{
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
              }}>
              <Image
                source={require('../assets/images/Group.png')}
                style={{marginRight: 5}}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Poppins-SemiBold',
                  marginLeft: 20,
                }}>
                Edit Profile
              </Text>
              <Image
                source={require('../assets/images/ic-chevron.png')}
                style={{position: 'absolute', right: 10}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('InputMenu');
            }}>
            <View
              style={{
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
              }}>
              <Image source={require('../assets/images/award.png')} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Poppins-SemiBold',
                  marginLeft: 20,
                }}>
                My Recipe
              </Text>
              <Image
                source={require('../assets/images/ic-chevron.png')}
                style={{position: 'absolute', right: 10}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.push('SavedBookmarkedMenu');
            }}>
            <View
              style={{
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
              }}>
              <Image source={require('../assets/images/Group_5.png')} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Poppins-SemiBold',
                  marginLeft: 20,
                }}>
                Saved Recipe
              </Text>
              <Image
                source={require('../assets/images/ic-chevron.png')}
                style={{position: 'absolute', right: 10}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.push('SavedLikedMenu');
            }}>
            <View
              style={{
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
              }}>
              <Image
                source={require('../assets/images/Vector.png')}
                style={{marginRight: 5}}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Poppins-SemiBold',
                  marginLeft: 20,
                }}>
                Liked Recipe
              </Text>
              <Image
                source={require('../assets/images/ic-chevron.png')}
                style={{position: 'absolute', right: 10}}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 60,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'grey',
                borderRadius: 10,
                width: 200,
                margin: 3,
              }}
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{name: 'IndexRoute'}],
                });
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 10,
                  fontFamily: 'Poppins-Bold',
                  color: 'white',
                }}>
                Back Menu
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                borderRadius: 10,
                width: 200,
                margin: 3,
              }}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 10,
                  fontFamily: 'Poppins-Bold',
                  color: 'white',
                }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        isVisible={modalVisible}
        backdropOpacity={0.5}
        backdropColor="black">
        <View style={{backgroundColor: 'white', padding: 30, borderRadius: 10}}>
          <Text style={{textAlign: 'center', fontFamily: 'Poppins-Bold'}}>
            Are you sure want to logout?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity
              title="for hide"
              style={{
                flex: 1,
                backgroundColor: GlobalStyle.color_recipe.font_y,
                borderRadius: 5,
                marginHorizontal: 5,
                marginTop: 10,
              }}
              onPress={() => userLogout()}>
              <Text
                style={{
                  padding: 5,
                  textAlign: 'center',
                  fontFamily: 'Poppins-Bold',
                  color: 'white',
                }}>
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              title="for hide"
              style={{
                flex: 1,
                backgroundColor: GlobalStyle.color_recipe.font_g,
                borderRadius: 5,
                marginHorizontal: 5,
                marginTop: 10,
              }}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={{
                  padding: 5,
                  textAlign: 'center',
                  fontFamily: 'Poppins-Bold',
                  color: 'white',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UpdatedProfile;
