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

const Home = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.getAllMenu);
  const [sortby, setSortby] = useState('title');
  const [sort, setSort] = useState('ASC');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [search, setSearch] = useState('');
  const [searchby, setSearchby] = useState('title');

  const handleSearchChange = value => {
    setSearch(value);
  };

  const onSearchSubmit = () => {
    dispatch(getAllMenu(searchby, search, sortby, sort, page, limit));
  };
  useEffect(() => {
    onSearchSubmit();
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
            {data?.rows?.map(item => {
              return (
                <View
                  key={item.id}
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
                  marginTop: 40,
                  padding: 0,
                }}>
                Popular Recipes
              </Text>
            </TouchableOpacity>
            <Text style={{fontFamily: 'Poppins-Bold'}}>Popular check</Text>
            <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
              <View style={{position: 'relative', marginRight: 10}}>
                <Image source={require('../assets/images/Rectangle_7.png')} />
                <Text
                  style={{
                    color: 'white',
                    position: 'absolute',
                    padding: 15,
                    fontFamily: 'Poppins-Bold',
                    fontSize: 18,
                    width: '50%',
                    bottom: -5,
                  }}>
                  Sandwich With Egg
                </Text>
              </View>
              <View style={{position: 'relative'}}>
                <Image source={require('../assets/images/Rectangle_7.png')} />
                <Text
                  style={{
                    color: 'white',
                    position: 'absolute',
                    padding: 15,
                    fontFamily: 'Poppins-Bold',
                    fontSize: 18,
                    width: '50%',
                    bottom: -5,
                  }}>
                  Sandwich With Egg
                </Text>
              </View>
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
              Popular For You
            </Text>
            <ScrollView
              horizontal={true}
              style={{flexDirection: 'row', marginBottom: 50}}>
              <View style={{width: 180, position: 'relative', marginRight: 10}}>
                <Image
                  style={{borderRadius: 10}}
                  source={require('../assets/images/Rectangle_55.png')}
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
                    Beef Steak
                  </Text>
                  <Text style={{fontFamily: 'Poppins-Medium'}}>
                    Beef steak with nopales, tartare ....
                  </Text>
                </View>
              </View>
              <View style={{width: 180, position: 'relative', marginRight: 10}}>
                <Image
                  style={{borderRadius: 10}}
                  source={require('../assets/images/Rectangle_55.png')}
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
                    Beef Steak
                  </Text>
                  <Text style={{fontFamily: 'Poppins-Medium'}}>
                    Beef steak with nopales, tartare ....
                  </Text>
                </View>
              </View>
              <View style={{width: 180, position: 'relative', marginRight: 10}}>
                <Image
                  style={{borderRadius: 10}}
                  source={require('../assets/images/Rectangle_55.png')}
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
                    Beef Steak
                  </Text>
                  <Text style={{fontFamily: 'Poppins-Medium'}}>
                    Beef steak with nopales, tartare ....
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default Home;
