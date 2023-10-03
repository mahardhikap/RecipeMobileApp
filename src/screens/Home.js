import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import GlobalStyle from '../assets/styles/style';
import {useNavigation} from '@react-navigation/native';
import {getAllMenu} from '../redux/actions/menu/getAllMenu';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {likedMenu} from '../redux/actions/menu/likedMenu';
import {bookmarkedMenu} from '../redux/actions/menu/bookmarkedMenu';
import {getBookmarkedMenu} from '../redux/actions/menu/getBookmarkedMenu';
import {getMenuUser} from '../redux/actions/menu/getMenuUser';

const Home = () => {
  const dispatch = useDispatch();
  const {data: menuData} = useSelector(state => state.getAllMenu);
  const {data: menuUser} = useSelector(state => state.getMenuUser);
  const [sortby, setSortby] = useState('title');
  const [sort, setSort] = useState('ASC');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [search, setSearch] = useState('');
  const [searchby, setSearchby] = useState('title');
  const {like} = useSelector(state => state.getLikedMenu);
  const {bookmark} = useSelector(state => state.getBookmarkedMenu);

  const handleSearchChange = value => {
    setSearch(value);
  };

  const onSearchSubmit = () => {
    dispatch(getAllMenu(searchby, search, sortby, sort, page, limit));
  };

  const popularCheckMenu = () => {
    dispatch(getAllMenu('', '', 'like_count', 'DESC', page, 3));
  };

  const forMenuUser = () => {
    dispatch(getMenuUser('created_at', 'DESC', page, 3));
  };

  const handleLiked = async itemId => {
    dispatch(likedMenu(itemId));
    onSearchSubmit();
  };

  const handleBookmarked = async itemId => {
    dispatch(bookmarkedMenu(itemId));
  };

  useEffect(() => {
    onSearchSubmit();
    popularCheckMenu();
    forMenuUser();
  }, [search]);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={GlobalStyle.container_bootstrap}>
        <View style={{marginTop: 40}}>
          <SearchBar changeText={handleSearchChange} />
        </View>
      </View>
      {search ? (
        <ScrollView>
          <StatusBar translucent backgroundColor="black" />
          <View style={GlobalStyle.container_bootstrap}>
            {menuData?.rows?.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    navigation.navigate('DetailMenu', {id: item.id})
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
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <ScrollView>
          <StatusBar translucent backgroundColor="black" />
          <View style={GlobalStyle.container_bootstrap}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PopularMenu');
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 20,
                  marginTop: 20,
                  padding: 0,
                }}>
                Popular Recipes
              </Text>
            </TouchableOpacity>
            <Text style={{fontFamily: 'Poppins-Bold'}}>Popular check</Text>
            <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
              {menuData?.rows?.map(popular => {
                return (
                  <TouchableOpacity
                    key={popular.id}
                    onPress={() =>
                      navigation.push('DetailMenu', {id: popular.id})
                    }>
                    <View
                      style={{position: 'relative', marginRight: 10}}
                      key={popular.id}>
                      <Image
                        style={{
                          width: 310,
                          height: 200,
                          resizeMode: 'cover',
                          borderRadius: 10,
                          borderWidth: 2,
                          elevation: 5,
                          // shadowColor: 'black',
                          // shadowOffset: {width: 0, height: 5},
                          // shadowOpacity: 0.5,
                          // shadowRadius: 10,
                        }}
                        source={{uri: popular.photo_menu}}
                      />
                      <View
                        style={{
                          position: 'absolute',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          padding: 15,
                          width: '100%',
                          height: '100%',
                          bottom: 0,
                          borderRadius: 10,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontFamily: 'Poppins-Bold',
                            fontSize: 18,
                            position: 'absolute',
                            bottom: 0,
                            paddingBottom: 30,
                            paddingLeft: 10,
                            width: '65%',
                          }}>
                          {popular.title}
                        </Text>
                        <Text
                          style={{
                            color: '#EFC81A',
                            fontSize: 14,
                            fontFamily: 'Poppins-Bold',
                            position: 'absolute',
                            bottom: 0,
                            paddingBottom: 12,
                            paddingLeft: 10,
                          }}>
                          {popular.username}
                        </Text>
                        <Text
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            color: 'white',
                            fontFamily: 'Poppins-Bold',
                            fontSize: 12,
                            padding: 10,
                          }}>
                          Like{' '}
                          <Text style={{color: '#EFC81A'}}>
                            {popular.like_count}
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 20,
                marginTop: 40,
                padding: 0,
              }}>
              New Recipes
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => navigation.push('NewMenuPage')}>
                  <Image source={require('../assets/images/Group_48.png')} />
                  <Text
                    style={{textAlign: 'center', fontFamily: 'Poppins-Medium'}}>
                    New Menu
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => navigation.push('AppetizerPage')}>
                  <Image source={require('../assets/images/Group_47.png')} />
                  <Text
                    style={{textAlign: 'center', fontFamily: 'Poppins-Medium'}}>
                    Appetizer
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{justifyContent: 'center', alignItems: 'center'}}
                  onPress={() => navigation.push('MainCoursePage')}>
                  <Image source={require('../assets/images/Group_49.png')} />
                  <Text
                    style={{textAlign: 'center', fontFamily: 'Poppins-Medium'}}>
                    Main Course
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => navigation.push('DessertPage')}>
                  <Image source={require('../assets/images/Group_50.png')} />
                  <Text
                    style={{textAlign: 'center', fontFamily: 'Poppins-Medium'}}>
                    Dessert
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 20,
                marginTop: 40,
                padding: 0,
              }}>
              Your Recent Recipe
            </Text>
            <ScrollView
              horizontal={true}
              style={{flexDirection: 'row', marginBottom: 50}}>
              {menuUser.rows?.map(user => {
                return (
                  <View
                    style={{width: 190, position: 'relative', marginRight: 10}}>
                    <Image
                      style={{borderRadius: 10, width: 190, height: 150}}
                      source={{uri:user.photo_menu}}
                    />
                    <View
                      style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        width: '100%',
                        bottom: 0,
                        borderBottomEndRadius: 10,
                        borderBottomLeftRadius: 10,
                        padding: 5,
                      }}>
                      <Text style={{fontFamily: 'Poppins-ExtraBold'}}>
                        {user.title}
                      </Text>
                      <Text style={{fontFamily: 'Poppins-Medium'}}>
                        {user.category}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default Home;
