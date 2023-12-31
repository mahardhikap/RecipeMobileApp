import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  Alert,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalStyle from '../assets/styles/style';
import {useNavigation} from '@react-navigation/native';
import {getMenuUser} from '../redux/actions/menu/getMenuUser';
import {deleteMenu} from '../redux/actions/menu/deleteMenu';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

const InputMenu = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data, isLoading, errorMessage} = useSelector(
    state => state.getMenuUser,
  );
  const [page, setPage] = useState(1);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [idDelete, setIdDelete] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [menuTitle, setMenuTitle] = useState('');

  const getMenuByUser = () => {
    dispatch(getMenuUser('created_at', 'DESC', page, 4));
  };

  const goToPage = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= data?.pages.totalPage) {
      setPage(pageNumber);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    getMenuByUser();
    setRefreshing(false);
  };

  const handleDelete = async itemId => {
    try {
      dispatch(deleteMenu(itemId));
      setItemToDelete(itemId);
    } catch (error) {
      console.error('error saat delete', error);
    }
  };

  useEffect(() => {
    getMenuByUser();
  }, [page, itemToDelete]);

  useEffect(() => {
    if (itemToDelete) {
      const delay = setTimeout(() => {
        setItemToDelete(null);
      }, 1000);
      return () => clearTimeout(delay);
    }
  }, [itemToDelete]);

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        <Text
          style={{
            textAlign: 'center',
            color: GlobalStyle.color_recipe.font_y,
            fontSize: 25,
            fontFamily: 'Poppins-Bold',
            marginTop: 40,
          }}>
          My Recipe
        </Text>
        <View style={GlobalStyle.container_bootstrap}>
          <TouchableOpacity
            style={{backgroundColor: 'green', width: 60, borderRadius: 10}}
            onPress={() => {
              navigation.push('AddMenu');
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 15,
                color: 'white',
                textAlign: 'center',
                padding: 5,
                alignItems: 'center',
              }}>
              Add
            </Text>
          </TouchableOpacity>

          {isLoading === true ? (
            <ActivityIndicator
              size="large"
              color={GlobalStyle.color_recipe.font_y}
            />
          ) : data?.rows && data.rows?.length > 0 ? (
            data.rows?.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => navigation.push('DetailMenu', {id: item.id})}>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: 'white',
                      padding: 10,
                      borderRadius: 10,
                      position: 'relative',
                      marginTop: 10,
                    }}>
                    <View>
                      <Image
                        style={{
                          resizeMode: 'cover',
                          width: 90,
                          height: 90,
                          borderRadius: 10,
                          borderWidth: 2,
                          borderColor: 'yellow',
                        }}
                        source={{uri: item.photo_menu}}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        marginStart: 20,
                        width: 150,
                      }}>
                      <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18}}>
                        {item.title}
                      </Text>
                      <Text
                        style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
                        {item.category}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        position: 'absolute',
                        right: 10,
                        top: 13,
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.push('EditMenu', {id: item.id})
                        }
                        style={{
                          backgroundColor: '#30C0F3',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 5,
                          marginVertical: 5,
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontFamily: 'Poppins-Medium',
                          }}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#F57E71',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 5,
                          marginVertical: 5,
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                        }}
                        onPress={() => {
                          setModalVisible(true);
                          setIdDelete(item.id);
                          setMenuTitle(item.title);
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontFamily: 'Poppins-Medium',
                          }}>
                          Delete
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: 500,
              }}>
              <View>
                <Image source={require('../assets/images/Group_697.png')} />
                <Text style={{textAlign: 'center'}}>
                  {errorMessage?.message}
                </Text>
              </View>
            </View>
          )}
          {data ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                marginBottom: 30,
              }}>
              <TouchableOpacity onPress={() => goToPage(page - 1)}>
                <Ionicons
                  name="arrow-back-circle-outline"
                  size={30}
                  color={GlobalStyle.color_recipe.font_y}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Poppins-Medium',
                  color: GlobalStyle.color_recipe.font_y,
                }}>
                Halaman {page} dari {data?.pages.totalPage}
              </Text>
              <TouchableOpacity onPress={() => goToPage(page + 1)}>
                <Ionicons
                  name="arrow-forward-circle-outline"
                  size={30}
                  color={GlobalStyle.color_recipe.font_y}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View></View>
          )}
        </View>
        <Modal
          isVisible={modalVisible}
          backdropOpacity={0.5}
          backdropColor="black">
          <View
            style={{backgroundColor: 'white', padding: 30, borderRadius: 10}}>
            <Text style={{textAlign: 'center', fontFamily: 'Poppins-Bold'}}>
              Are you sure want to delete{' '}
              <Text style={{color: GlobalStyle.color_recipe.font_y}}>
                {menuTitle}
              </Text>
              ?
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
                onPress={() => {
                  handleDelete(idDelete);
                  setModalVisible(!modalVisible);
                  getMenuByUser();
                }}>
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
      </ScrollView>
    </>
  );
};

export default InputMenu;
