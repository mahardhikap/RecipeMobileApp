import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import GlobalStyle from '../assets/styles/style';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute, useNavigation} from '@react-navigation/native';
import {getMenuById} from '../redux/actions/menu/getMenuById';
import {editMenu} from '../redux/actions/menu/editMenu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

const EditMenu = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;
  const {data} = useSelector(state => state.getMenuById);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  // const [selectedOption, setSelectedOption] = useState(data?.category_id);
  const [inputData, setInputData] = useState({
    title: '',
    ingredients: '',
    category_id: '',
    photo: '',
  });

  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const showCategoryModal = () => {
    setCategoryModalVisible(true);
  };

  const hideCategoryModal = () => {
    setCategoryModalVisible(false);
  };

  const selectCategory = categoryId => {
    setSelectedCategory(
      categoryOptions.find(option => option.value === categoryId)?.label || '',
    );
    onChangeInput('category_id', categoryId);
    hideCategoryModal();
  };

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

    // Check if selectedImage.uri is available, otherwise use inputData.photo
    if (selectedImage && selectedImage.uri) {
      formData.append('photo', {
        uri: selectedImage.uri,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });
    } else if (inputData.photo) {
      // Use inputData.photo if selectedImage.uri is not available
      formData.append('photo', {
        uri: inputData.photo,
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
        photo: data?.photo_menu,
      });
      setSelectedCategory(
        categoryOptions.find(option => option.value === data?.category_id)
          ?.label || '',
      );
      console.log(data?.category_id, 'cek this');
    }
  }, [data]);

  const categoryOptions = [
    {label: 'Appetizer', value: '1'},
    {label: 'Main Course', value: '2'},
    {label: 'Dessert', value: '3'},
  ];

  return (
    <>
      <ScrollView>
        <View style={GlobalStyle.container_bootstrap}>
          <View style={{marginTop: 40, marginBottom: 20}}>
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
                  borderColor: GlobalStyle.color_recipe.font_y,
                  borderWidth: 2,
                  color: GlobalStyle.color_recipe.font_g,
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
                  borderColor: GlobalStyle.color_recipe.font_y,
                  borderWidth: 2,
                  color: GlobalStyle.color_recipe.font_g,
                }}
              />

              <TouchableOpacity onPress={showCategoryModal}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    backgroundColor: 'white',
                    padding: 10,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: GlobalStyle.color_recipe.font_y,
                  }}>
                  {selectedCategory ? (
                    <Text
                      style={{
                        fontFamily: 'Poppins-SemiBold',
                        color: GlobalStyle.color_recipe.font_g,
                      }}>
                      {selectedCategory}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        flex: 1,
                        paddingRight: 10,
                        fontFamily: 'Poppins-SemiBold',
                        color: GlobalStyle.color_recipe.font_g,
                      }}>
                      {categoryOptions.find(
                        option => option.value === `${data?.category_id}`,
                      )?.label || ''}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>

              <Modal
                isVisible={isCategoryModalVisible}
                backdropOpacity={0.5}
                onBackdropPress={hideCategoryModal}>
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 20,
                    borderRadius: 10,
                  }}>
                  {categoryOptions.map(option => (
                    <TouchableOpacity
                      key={option.value}
                      onPress={() => selectCategory(option.value)}
                      style={{paddingVertical: 10}}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-SemiBold',
                          color: GlobalStyle.color_recipe.font_g,
                        }}>
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </Modal>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                  height: 200,
                  width: '100%',
                  borderWidth: 2,
                  borderColor: GlobalStyle.color_recipe.font_y,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  padding:10
                }}>
                {selectedImage && selectedImage.uri && (
                  <Image
                    resizeMode="cover"
                    style={{height: '100%', width: '100%', borderRadius: 10}}
                    source={{uri: selectedImage.uri}}
                  />
                )}
                {!selectedImage && inputData.photo && (
                  <Image
                    resizeMode="cover"
                    style={{height: '100%', width: '100%', borderRadius: 10}}
                    source={{uri: inputData.photo}}
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
              <TouchableOpacity
                onPress={uploadRecipe}
                style={{
                  backgroundColor: GlobalStyle.color_recipe.font_y,
                  borderRadius: 10,
                  marginVertical: 20,
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
