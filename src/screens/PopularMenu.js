import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import GlobalStyle from '../assets/styles/style';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getAllMenu} from '../redux/actions/menu/getAllMenu';
import {useDispatch, useSelector} from 'react-redux';
import {likedMenu} from '../redux/actions/menu/likedMenu';
import {getLikedMenu} from '../redux/actions/menu/getLikedMenu';
import {bookmarkedMenu} from '../redux/actions/menu/bookmarkedMenu';
import {getBookmarkedMenu} from '../redux/actions/menu/getBookmarkedMenu';

const PopularMenu = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data, isLoading, errorMessage} = useSelector(
    state => state.getAllMenu,
  );
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const {like} = useSelector(state => state.getLikedMenu);
  const {bookmark} = useSelector(state => state.getBookmarkedMenu);

  const getDataMenu = () => {
    dispatch(getAllMenu('', '', 'like_count', 'DESC', page, 10));
  };

  const handleLiked = async itemId => {
    dispatch(likedMenu(itemId));
    getDataMenu();
    dispatch(getLikedMenu());
  };

  const handleBookmarked = async itemId => {
    dispatch(bookmarkedMenu(itemId));
    getDataMenu()
    dispatch(getBookmarkedMenu());
  };

  const handleRefresh = () => {
    setRefreshing(true);
    getDataMenu();
    dispatch(getLikedMenu());
    dispatch(getBookmarkedMenu());
    setRefreshing(false);
  };

  const goToPage = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= data?.pages.totalPage) {
      setPage(pageNumber);
      dispatch(getAllMenu('', '', 'like_count', 'DESC', pageNumber, 10));
    }
  };

  useEffect(() => {
    getDataMenu();
  }, [page]);

  useEffect(()=>{
    getDataMenu()
    dispatch(getLikedMenu());
    dispatch(getBookmarkedMenu());
  },[])

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
      <View style={GlobalStyle.container_bootstrap}>
        <View style={{marginTop: 40}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('IndexRoute');
              }}>
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
            {isLoading ? (
              <ActivityIndicator
                size="large"
                color={GlobalStyle.color_recipe.font_y}
              />
            ) : (
              data?.rows?.map(item => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() =>
                      navigation.push('DetailMenu', {id: item.id})
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
                        <Text
                          style={{fontFamily: 'Poppins-Bold', fontSize: 18}}>
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Medium',
                            fontSize: 14,
                          }}>
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
                            style={{
                              fontFamily: 'Poppins-Bold',
                              fontSize: 12,
                            }}>
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
                          onPress={() => handleBookmarked(item.id)}>
                          <Ionicons
                            name={
                              bookmark &&
                              bookmark !== null &&
                              bookmark?.some(
                                bookmarkedItem =>
                                  bookmarkedItem.recipe_id === item.id,
                              )
                                ? 'bookmark-outline'
                                : 'bookmark-outline'
                            }
                            size={30}
                            color={
                              bookmark &&
                              bookmark !== null &&
                              bookmark?.some(
                                bookmarkedItem =>
                                  bookmarkedItem.recipe_id === item.id,
                              )
                                ? GlobalStyle.color_recipe.font_y
                                : GlobalStyle.color_recipe.font_g
                            }
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLiked(item.id)}>
                          <Ionicons
                            name={
                              like &&
                              like !== null &&
                              like?.some(
                                likedItem => likedItem.recipe_id === item.id,
                              )
                                ? 'thumbs-up-outline'
                                : 'thumbs-up-outline'
                            }
                            size={30}
                            color={
                              like &&
                              like !== null &&
                              like?.some(
                                likedItem => likedItem.recipe_id === item.id,
                              )
                                ? GlobalStyle.color_recipe.font_y
                                : GlobalStyle.color_recipe.font_g
                            }
                          />
                          <Text style={{textAlign: 'center'}}>
                            {item.like_count}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              })
            )}
          </View>
          {data ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <TouchableOpacity
                onPress={() => goToPage(page - 1)}
                disabled={page === 1}>
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
              <TouchableOpacity
                onPress={() => goToPage(page + 1)}
                disabled={page === data?.pages.totalPage}>
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
      </View>
    </ScrollView>
  );
};

export default PopularMenu;
