import {
    ScrollView,
    View,
    Image,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    RefreshControl,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import SearchBar from '../components/SearchBar';
  import GlobalStyle from '../assets/styles/style';
  import {getAllMenu} from '../redux/actions/menu/getAllMenu';
  import {useDispatch, useSelector} from 'react-redux';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import {useNavigation} from '@react-navigation/native';
  import {likedMenu} from '../redux/actions/menu/likedMenu';
  
  const NewMenuPage = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {data, isLoading} = useSelector(state => state.getAllMenu);
    const {like} = useSelector(state => state.getLikedMenu);
    const [page, setPage] = useState(1);
    const [refreshing, setRefreshing] = useState(false);
  
    const onSearchSubmit = () => {
      dispatch(
        getAllMenu('', '', 'created_at', 'DESC', page, 4),
      );
    };
  
    const handleRefresh = () => {
      setRefreshing(true);
      onSearchSubmit();
      setRefreshing(false);
    };
  
    const handleLiked = async itemId => {
      dispatch(likedMenu(itemId));
    };
  
    const goToPage = pageNumber => {
      if (pageNumber >= 1 && pageNumber <= data?.pages.totalPage) {
        setPage(pageNumber);
        dispatch(
          getAllMenu(
            '',
            '',
            'created_at',
            'DESC',
            pageNumber,
            4,
          ),
        );
      }
    };
  
    useEffect(() => {
      onSearchSubmit();
    }, [page]);
  
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        <View style={{marginBottom: 60, marginTop: 40}}>
          <View style={GlobalStyle.container_bootstrap}>
            {data ? (
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
                            <Ionicons
                              name="bookmark-outline"
                              size={30}
                              color={GlobalStyle.color_recipe.font_y}
                            />
                            <TouchableOpacity
                              onPress={() => handleLiked(item.id)}>
                              {like?.some(
                                likedItem => likedItem.recipe_id === item.id,
                              ) ? (
                                <Ionicons
                                  name="thumbs-up-outline"
                                  size={30}
                                  color={GlobalStyle.color_recipe.font_y}
                                />
                              ) : (
                                <Ionicons
                                  name="thumbs-up-outline"
                                  size={30}
                                  color={GlobalStyle.color_recipe.font_g}
                                />
                              )}
                            </TouchableOpacity>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })
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
            ):(
              <View></View>
            )}
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default NewMenuPage;  