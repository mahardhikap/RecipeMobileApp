import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import GlobalStyle from '../assets/styles/style';
import {getAllMenu} from '../redux/actions/menu/getAllMenu';
import {getLikedMenu} from '../redux/actions/menu/getLikedMenu';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {likedMenu} from '../redux/actions/menu/likedMenu';
import {bookmarkedMenu} from '../redux/actions/menu/bookmarkedMenu';
import {getBookmarkedMenu} from '../redux/actions/menu/getBookmarkedMenu';

const Search = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data, isLoading, errorMessage} = useSelector(
    state => state.getAllMenu,
  );
  const {like} = useSelector(state => state.getLikedMenu);
  const {bookmark} = useSelector(state => state.getBookmarkedMenu);
  const [sortby, setSortby] = useState('title');
  const [sort, setSort] = useState('ASC');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [search, setSearch] = useState('');
  const [searchby, setSearchby] = useState('title');
  const [refreshing, setRefreshing] = useState(false);

  const handleSearchChange = value => {
    setSearch(value);
  };
  
  const onSearchSubmit = () => {
    dispatch(getAllMenu(searchby, search, sortby, sort, page, limit));
  };

  const handleRefresh = () => {
    setRefreshing(true);
    onSearchSubmit();
    dispatch(getLikedMenu());
    dispatch(getBookmarkedMenu());
    setRefreshing(false);
  };

  const handleLiked = async itemId => {
    dispatch(likedMenu(itemId));
    handleRefresh()
  };

  const handleBookmarked = async itemId => {
    dispatch(bookmarkedMenu(itemId));
    handleRefresh()
  };

  const goToPage = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= data?.pages.totalPage) {
      setPage(pageNumber);
    }
  };

  useEffect(() => {
    onSearchSubmit();
  }, [page, search]);

  useEffect(() => {
    onSearchSubmit()
    dispatch(getLikedMenu());
    dispatch(getBookmarkedMenu());
  }, [])

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
      <View style={{marginBottom: 30}}>
        <View style={GlobalStyle.container_bootstrap}>
          <View style={{marginTop: 40}}>
            <SearchBar changeText={handleSearchChange} />
          </View>
        </View>
        {data ? (
          <View style={GlobalStyle.container_bootstrap}>
            {isLoading ? (
              <ActivityIndicator
                size="large"
                color={GlobalStyle.color_recipe.font_y}
              />
            ) : (
              data?.rows?.map((item, index) => {
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
                        {/* <Ionicons
                          name="bookmark-outline"
                          size={30}
                          color={GlobalStyle.color_recipe.font_y}
                        /> */}
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
                                ? 'bookmark'
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
                                ? 'thumbs-up'
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
                );
              })
            )}
            {search ? (
              <View></View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
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
            )}
          </View>
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
              <Text style={{textAlign: 'center'}}>{errorMessage?.message}</Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Search;
