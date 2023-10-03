import {
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import GlobalStyle from '../assets/styles/style';
import {useNavigation} from '@react-navigation/native';
import {editProfile} from '../redux/actions/user/editProfile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditProfile = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const {data : profileBefore} = useSelector(state => state.loginUser);
  const {data : profileAfter} = useSelector(state => state.updateUser);
  const {isLoading} =useSelector(state => state.editProfile)
  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: '',
    photo_url: '',
  });

  const cameraLaunch = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    await launchCamera(options, res => {
      if (res.assets && res.assets.length > 0) {
        setSelectedImage(res.assets[0]);
      }
    });
  };

  const galleryLaunch = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    await launchImageLibrary(options, res => {
      if (res.assets && res.assets.length > 0) {
        setSelectedImage(res.assets[0]);
      }
    });
  };

  const updateProfile = async () => {
    let formData = new FormData();
    formData.append('username', inputData?.username);
    formData.append('email', inputData?.email);
    formData.append('password', inputData?.password || '');
    if (selectedImage && selectedImage.uri) {
      formData.append('photo', {
        uri: selectedImage.uri,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });
    } else if (inputData.photo_url) {
      formData.append('photo', {
        uri: inputData.photo_url,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });
    }
    dispatch(editProfile(formData, navigation.navigate));
  };

  const onChangeInput = (name, value) => {
    setInputData({...inputData, [name]: value});
  };

  useEffect(() => {
    if (profileBefore) {
      setInputData({
        username: profileAfter ? profileAfter?.username : profileBefore?.username,
        email: profileAfter ? profileAfter?.email : profileBefore?.email,
        photo_url: profileAfter ? profileAfter?.photo : profileBefore?.photo,
      });
    }
  }, [profileBefore]);

  return (
    <View style={GlobalStyle.container_bootstrap}>
      <ScrollView>
        <View style={{marginTop: 40}}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
              color: GlobalStyle.color_recipe.font_y,
            }}>
            Edit Profile
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            {selectedImage && selectedImage?.uri && (
              <Image
                resizeMode="cover"
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 75,
                  borderColor: GlobalStyle.color_recipe.font_y,
                  borderWidth: 1,
                }}
                source={{uri: selectedImage?.uri}}
              />
            )}
            {!selectedImage && inputData?.photo_url && (
              <Image
                resizeMode="cover"
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 75,
                  borderColor: GlobalStyle.color_recipe.font_y,
                  borderWidth: 1,
                }}
                source={{uri: inputData?.photo_url}}
              />
            )}
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => cameraLaunch()}
              style={{
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                name="camera"
                size={50}
                color={GlobalStyle.color_recipe.font_g}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => galleryLaunch()}
              style={{
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                name="image"
                size={50}
                color={GlobalStyle.color_recipe.font_g}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontFamily: 'Poppins-Medium'}}>Name</Text>
            <TextInput
              onChangeText={value => onChangeInput('username', value)}
              value={inputData?.username}
              style={{
                padding: 15,
                paddingLeft: 15,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                fontFamily: 'Poppins-SemiBold',
                borderColor: GlobalStyle.color_recipe.font_y,
                borderWidth: 2,
                color: GlobalStyle.color_recipe.font_g,
              }}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontFamily: 'Poppins-Medium'}}>Email</Text>
            <TextInput
              onChangeText={value => onChangeInput('email', value)}
              value={inputData?.email}
              style={{
                padding: 15,
                paddingLeft: 15,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                fontFamily: 'Poppins-SemiBold',
                borderColor: GlobalStyle.color_recipe.font_y,
                borderWidth: 2,
                color: GlobalStyle.color_recipe.font_g,
              }}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontFamily: 'Poppins-Medium'}}>Password</Text>
            <TextInput
              onChangeText={value => onChangeInput('password', value)}
              value={inputData?.password}
              style={{
                padding: 15,
                paddingLeft: 15,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                fontFamily: 'Poppins-SemiBold',
                borderColor: GlobalStyle.color_recipe.font_y,
                borderWidth: 2,
                color: GlobalStyle.color_recipe.font_g,
              }}
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            {isLoading ? (
              <ActivityIndicator
                size="large"
                color={GlobalStyle.color_recipe.font_y}
              />
            ) : (
              <TouchableOpacity
                onPress={updateProfile}
                style={{
                  backgroundColor: GlobalStyle.color_recipe.font_y,
                  width: 100,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    padding: 10,
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: 'Poppins-Bold',
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;
