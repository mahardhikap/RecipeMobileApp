import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import GlobalStyle from '../assets/styles/style';

const Home = ({navigation}) => (
  <ScrollView>
    <View style={GlobalStyle.container_bootstrap}>
      <View style={{marginTop:20}}>
        <SearchBar />
      </View>
      <Text
        style={{
          fontFamily: 'Poppins-SemiBold',
          fontSize: 20,
          marginTop: 40,
          padding: 0,
        }}>
        Popular Recipes
      </Text>
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
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Image source={require('../assets/images/Group_48.png')} />
          <Text style={{textAlign: 'center', fontFamily:'Poppins-Medium'}}>Soup</Text>
        </View>
        <View>
          <Image source={require('../assets/images/Group_47.png')} />
          <Text style={{textAlign: 'center', fontFamily:'Poppins-Medium'}}>Chicken</Text>
        </View>
        <View>
          <Image source={require('../assets/images/Group_49.png')} />
          <Text style={{textAlign: 'center', fontFamily:'Poppins-Medium'}}>Seafood</Text>
        </View>
        <View>
          <Image source={require('../assets/images/Group_50.png')} />
          <Text style={{textAlign: 'center', fontFamily:'Poppins-Medium'}}>Dessert</Text>
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
      <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
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
            <Text style={{fontFamily: 'Poppins-ExtraBold'}}>Beef Steak</Text>
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
            <Text style={{fontFamily: 'Poppins-ExtraBold'}}>Beef Steak</Text>
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
            <Text style={{fontFamily: 'Poppins-ExtraBold'}}>Beef Steak</Text>
            <Text style={{fontFamily: 'Poppins-Medium'}}>
              Beef steak with nopales, tartare ....
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  </ScrollView>
);

export default Home;
