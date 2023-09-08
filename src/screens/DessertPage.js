import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import GlobalStyle from '../assets/styles/style';
import {getAllMenu} from '../redux/actions/menu/getAllMenu';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const DessertPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.getAllMenu);
  const [sortby, setSortby] = useState('title');
  const [sort, setSort] = useState('ASC');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [search, setSearch] = useState('Dessert');
  const [searchby, setSearchby] = useState('category.name');

  const onSearchSubmit = () => {
    dispatch(getAllMenu(searchby, search, sortby, sort, page, limit));
  };

  const goToPage = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= data?.pages.totalPage) {
      setPage(pageNumber);
    }
  };

  useEffect(() => {
    onSearchSubmit();
  }, [search, page]);

  return (
    <ScrollView>
      <View style={{marginBottom: 60}}>
        <View style={GlobalStyle.container_bootstrap}>
          {data?.rows?.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('DetailMenu', {id: item.id})
                }>
                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    padding: 10,
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{width: 100, height: 100, resizeMode: 'cover'}}
                    source={{uri: item.photo_menu}}
                  />
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 10,
                      width: 140,
                    }}>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18}}>
                      {item.title}
                    </Text>
                    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
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
                      <Text style={{fontFamily: 'Poppins-Bold', fontSize: 12}}>
                        {item.username}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: 90,
                      justifyContent: 'space-between',
                      marginLeft: 5,
                    }}>
                    <Image
                      source={require('../assets/images/Group_86.png')}
                      style={{width: 40, height: 40}}
                    />
                    <Image
                      source={require('../assets/images/Group_87.png')}
                      style={{width: 40, height: 40}}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
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
            <Text style={{fontSize: 20}}>
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
        </View>
      </View>
    </ScrollView>
  );
};

export default DessertPage;