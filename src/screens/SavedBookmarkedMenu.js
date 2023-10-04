import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalStyle from '../assets/styles/style';
import {getBookmarkedMenu} from '../redux/actions/menu/getBookmarkedMenu';
import {bookmarkedMenu} from '../redux/actions/menu/bookmarkedMenu';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const SavedBookmarkedMenu = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {bookmark, errorMessage, isLoading} = useSelector(
    state => state.getBookmarkedMenu,
  );
  const [refreshing, setRefreshing] = useState(false);

  const allRecipeBookmarked = () => {
    dispatch(getBookmarkedMenu());
  };

  const handleRefresh = () => {
    setRefreshing(true);
    allRecipeBookmarked();
    dispatch(getBookmarkedMenu());
    setRefreshing(false);
  };

  const handleBookmarked = async itemId => {
    dispatch(bookmarkedMenu(itemId));
    handleRefresh()
  };

  useEffect(() => {
    allRecipeBookmarked();
  }, []);
  return (
    <ScrollView
      style={{marginBottom: 60, marginTop: 40, flex: 1}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
      <View style={GlobalStyle.container_bootstrap}>
        {bookmark && bookmark?.length > 0 ? (
          bookmark?.map(item => {
            return (
              <View key={item.bookmarked_id}>
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
                      {isLoading === true ? (
                        <ActivityIndicator size="small" color={'#EFC81A'} />
                      ) : (
                        <TouchableOpacity
                          onPress={() => handleBookmarked(item.recipe_id)}>
                          <Ionicons
                            name="bookmark"
                            size={30}
                            color={GlobalStyle.color_recipe.font_y}
                          />
                        </TouchableOpacity>
                      )}
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

export default SavedBookmarkedMenu;
