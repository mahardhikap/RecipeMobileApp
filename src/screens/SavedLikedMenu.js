import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalStyle from '../assets/styles/style';
import {getLikedMenu} from '../redux/actions/menu/getLikedMenu';
import {likedMenu} from '../redux/actions/menu/likedMenu';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const SavedLikedMenu = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {like, errorMessage} = useSelector(state => state.getLikedMenu);
  const [refreshing, setRefreshing] = useState(false);

  const allRecipeLiked = () => {
    dispatch(getLikedMenu());
  };

  const handleLiked = async itemId => {
    dispatch(likedMenu(itemId));
    dispatch(getLikedMenu())
  };

  const handleRefresh = () => {
    setRefreshing(true);
    allRecipeLiked();
    dispatch(getLikedMenu())
    setRefreshing(false);
  };

  useEffect(() => {
    allRecipeLiked();
  }, []);
  return (
    <ScrollView
      style={{marginBottom: 60, marginTop: 40, flex: 1}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
      <View style={GlobalStyle.container_bootstrap}>
        {like && like?.length > 0 ? (
          like?.map(item => {
            return (
              <View key={item.liked_id}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.push('DetailMenu', {id: item.recipe_id})
                  }>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <Image
                      style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'cover',
                        borderRadius: 10,
                        borderColor: 'yellow',
                        borderWidth: 2,
                      }}
                      source={{uri: item.photo_menu}}
                    />
                    <View
                      style={{
                        flexDirection: 'column',
                        marginHorizontal: 8,
                        width: 150,
                      }}>
                      <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18}}>
                        {item.title}
                      </Text>
                      <Text
                        style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
                        {item.category}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          width: 90,
                        }}>
                        <Image
                          style={{width: 20, height: 20}}
                          source={require('../assets/images/user.png')}
                        />
                        <Text
                          style={{fontFamily: 'Poppins-Bold', fontSize: 12}}>
                          {item.username}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: 80,
                        justifyContent: 'space-evenly',
                        marginLeft: 5,
                      }}>
                      <TouchableOpacity
                        onPress={() => handleLiked(item.recipe_id)}>
                        <Ionicons
                          name="thumbs-up-outline"
                          size={30}
                          color={GlobalStyle.color_recipe.font_y}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: 700,
            }}>
            <View>
              <Image source={require('../assets/images/Group_697.png')} />
              <Text style={{textAlign: 'center'}}>{errorMessage?.message}</Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default SavedLikedMenu;
