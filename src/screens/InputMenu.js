import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalStyle from '../assets/styles/style';
import {useNavigation} from '@react-navigation/native';
import {getMenuUser} from '../redux/actions/menu/getMenuUser';
import {deleteMenu} from '../redux/actions/menu/deleteMenu';
import {useDispatch, useSelector} from 'react-redux';

const InputMenu = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.getMenuUser);
  const [itemToDelete, setItemToDelete] = useState(null);

  const getMenuByUser = () => {
    dispatch(getMenuUser());
  };

  const handleDelete = async itemId => {
    try {
      await dispatch(deleteMenu(itemId));
      setItemToDelete(itemId);
    } catch (error) {
      console.error('error saat delete', error);
    }
  };

  useEffect(() => {
    getMenuByUser();
  }, [itemToDelete]);

  useEffect(() => {
    if (itemToDelete) {
      const delay = setTimeout(() => {
        setItemToDelete(null);
      }, 300);
      return () => clearTimeout(delay);
    }
  }, [itemToDelete]);

  return (
    <>
      <ScrollView>
        <Text
          style={{
            textAlign: 'center',
            color: GlobalStyle.color_recipe.font_y,
            fontSize: 30,
            fontFamily: 'Poppins-Bold',
            marginTop: 25,
          }}>
          My Recipe
        </Text>
        <View style={GlobalStyle.container_bootstrap}>
          <TouchableOpacity
            style={{backgroundColor: 'green', width: 60, borderRadius: 10}}
            onPress={() => {
              navigation.navigate('AddMenu');
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

          {data?.rows && data.rows?.length > 0 ? (
            data.rows?.map(item => {
              return (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: 'white',
                      padding: 10,
                      borderRadius: 10,
                      position: 'relative',
                      marginTop: 35,
                    }}>
                    <View key={item.id}>
                      <Image
                        style={{resizeMode: 'cover', width: 90, height: 90}}
                        source={{uri: item.photo_menu}}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        marginStart: 20,
                        width: 150,
                      }}>
                      <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20}}>
                        {item.title}
                      </Text>
                      <Text
                        style={{fontFamily: 'Poppins-Medium', fontSize: 18}}>
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
                      onPress={() => navigation.navigate('EditMenu', {id: item.id})}
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
                        onPress={() => handleDelete(item.id)}>
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
                </>
              );
            })
          ) : (
            <Text>No data available</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default InputMenu;
