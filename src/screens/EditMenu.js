import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import GlobalStyle from '../assets/styles/style';
import {Picker} from '@react-native-picker/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {postMenu} from '../redux/actions/menu/postMenu';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {getMenuById} from '../redux/actions/menu/getMenuById';
import { editMenu } from '../redux/actions/menu/editMenu';
import { useNavigation } from '@react-navigation/native';

const EditMenu = () => {
    const navigation = useNavigation()
  const route = useRoute();
  const {id} = route.params;
  const {data} = useSelector(state => state.getMenuById);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(selectedOption);
  const [inputData, setInputData] = useState({
    title: '',
    ingredients: '',
    category_id: selectedOption,
    photo_url: '',
  });

  const getMenu = () => {
    dispatch(getMenuById(id));
  };

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

  const uploadRecipe = async () => {
    let formData = new FormData();
    formData.append('title', inputData?.title);
    formData.append('ingredients', inputData?.ingredients);
    formData.append('category_id', inputData?.category_id);
    if (selectedImage) {
        formData.append('photo', {
          uri: selectedImage?.uri,
          name: 'photo.jpg',
          type: 'image/jpeg',
        });
      }
    dispatch(editMenu(formData, id, navigation.navigate));
  };

  const onChangeInput = (name, value) => {
    setInputData({...inputData, [name]: value});
    // console.log('input data menu', inputData);
  };

  useEffect(() => {
    getMenu();
  }, []);

  useEffect(() => {
    if (data) {
      setInputData({
        title: data?.title,
        ingredients: data?.ingredients,
        category_id: data?.category_id,
        photo_url: data?.photo,
      });
      setSelectedOption(data?.category_id)
    }
  }, [data]);

  const categoryOptions = [
    { label: 'Appetizer', value: '1' },
    { label: 'Main Course', value: '2' },
    { label: 'Dessert', value: '3' },
  ];

  return (
    <>
      <ScrollView>
        <View style={GlobalStyle.container_bootstrap}>
          <View style={{marginVertical: 30}}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Poppins-SemiBold',
                textAlign: 'center',
                color: GlobalStyle.color_recipe.font_y,
              }}>
              Add Your Recipe
            </Text>
          </View>
          <View>
            <View>
              <TextInput
                onChangeText={value => onChangeInput('title', value)}
                value={inputData?.title}
                placeholder="Title"
                placeholderTextColor={GlobalStyle.color_recipe.font_g}
                style={{
                  padding: 20,
                  paddingLeft: 15,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  fontFamily: 'Poppins-SemiBold',
                }}
              />
              <TextInput
                onChangeText={value => onChangeInput('ingredients', value)}
                value={inputData?.ingredients}
                placeholder="Ingredients"
                placeholderTextColor={GlobalStyle.color_recipe.font_g}
                multiline={true}
                numberOfLines={6}
                style={{
                  paddingLeft: 15,
                  marginTop: 20,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  fontFamily: 'Poppins-SemiBold',
                }}
              />
              <Picker
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  marginTop: 20,
                  color: GlobalStyle.color_recipe.font_g,
                  fontFamily: 'Poppins-SemiBold',
                }}
                selectedValue={selectedOption}
                onValueChange={itemValue => {
                  setSelectedOption(itemValue);
                  setInputData({...inputData, category_id: itemValue});
                }}>
                {categoryOptions.map(option => (
                  <Picker.Item
                    key={option.value}
                    label={option.label}
                    value={option.value}
                  />
                ))}
              </Picker>
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
                  <Text
                    style={{textAlign: 'center', fontFamily: 'Poppins-Medium'}}>
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
                  <Text
                    style={{textAlign: 'center', fontFamily: 'Poppins-Medium'}}>
                    Gallery Foto
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                {selectedImage && (
                  <Image
                    resizeMode="cover"
                    style={{height: 200, width: 200}}
                    source={{uri: selectedImage?.uri}}
                  />
                )}
                {!selectedImage &&
                  inputData?.photo_url && ( // Use inputData.photo_url here
                    <Image
                      resizeMode="cover"
                      style={{height: 200, width: 200}}
                      source={{uri: inputData?.photo_url}}
                    />
                  )}
              </View>
              <TouchableOpacity
                onPress={uploadRecipe}
                style={{
                  backgroundColor: GlobalStyle.color_recipe.font_y,
                  borderRadius: 10,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    padding: 20,
                    textAlign: 'center',
                    fontFamily: 'Poppins-Bold',
                    color: 'white',
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default EditMenu;
