import {
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import GlobalStyle from '../assets/styles/style';
import {useNavigation} from '@react-navigation/native';
import {editProfile} from '../redux/actions/user/editProfile';

const EditProfile = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.loginUser);
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
    if (data) {
      setInputData({
        username: data?.username,
        email: data?.email,
        photo_url: data?.photo,
      });
    }
  }, [data]);

  return (
    <View style={GlobalStyle.container_bootstrap}>
      <ScrollView>
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
                backgroundColor: '#30C0F3',
                padding: 10,
                width: 100,
                borderRadius: 10,
              }}>
              <Text style={{textAlign: 'center', fontFamily: 'Poppins-Medium'}}>
                Take Foto
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => galleryLaunch()}
              style={{
                backgroundColor: '#F57E71',
                padding: 10,
                width: 100,
                borderRadius: 10,
              }}>
              <Text style={{textAlign: 'center', fontFamily: 'Poppins-Medium'}}>
                Gallery Foto
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontFamily: 'Poppins-Medium'}}>Name</Text>
            <TextInput
              onChangeText={value => onChangeInput('username', value)}
              value={inputData?.username}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                padding: 10,
              }}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontFamily: 'Poppins-Medium'}}>Email</Text>
            <TextInput
              onChangeText={value => onChangeInput('email', value)}
              value={inputData?.email}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                padding: 10,
              }}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontFamily: 'Poppins-Medium'}}>Password</Text>
            <TextInput
              onChangeText={value => onChangeInput('password', value)}
              value={inputData?.password}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                padding: 10,
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
            <TouchableOpacity
              onPress={updateProfile}
              style={{
                backgroundColor: '#30C0F3',
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;
