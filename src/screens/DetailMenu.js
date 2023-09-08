import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyle from '../assets/styles/style';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute, useNavigation} from '@react-navigation/native';
import {getMenuById} from '../redux/actions/menu/getMenuById';

const {width: screenWidth} = Dimensions.get('window');
const styles = StyleSheet.create({
  stretch: {
    width: screenWidth,
    height: 400,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 400,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Sesuaikan dengan kegelapan yang Anda inginkan
  },
});
const DetailMenu = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;
  const {data} = useSelector(state => state.getMenuById);

  const getDetail = () => {
    dispatch(getMenuById(id));
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <ScrollView>
      <StatusBar translucent backgroundColor="transparent" />
      <View>
        <Image style={styles.stretch} source={{uri: data?.photo_menu}} />
      </View>
      <View style={styles.overlay} />
      <View style={{position: 'relative'}}>
        <TouchableOpacity
          style={{position: 'absolute', top: -350, zIndex: 1, left: 10}}
          onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={30}
            color={GlobalStyle.color_recipe.font_y}
          />
        </TouchableOpacity>
        <View style={{position: 'absolute', top: -160, marginHorizontal: 10}}>
          <Text
            style={{fontFamily: 'Poppins-Bold', fontSize: 25, color: 'white'}}>
            {data?.title}
          </Text>
          <Text
            style={{fontFamily: 'Poppins-Bold', fontSize: 15, color: 'white'}}>
            <Text style={{color:GlobalStyle.color_recipe.font_y}}>Chef</Text> {data?.username}
          </Text>
        </View>
        <View
          style={{
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: 'white',
            marginTop: -50,
            height: 500,
          }}>
          <Text style={{padding: 10, fontFamily: 'Poppins-Bold', fontSize: 20}}>
            Ingredients
          </Text>
          <View
            style={{
              marginHorizontal: 10,
              marginTop: 15,
              backgroundColor: '#FAF7ED',
              borderRadius: 10,
              padding: 10,
            }}>
            {data?.ingredients?.split(',').map((material, index) => {
              return (
                <Text key={index} style={{fontFamily: 'Poppins-Regular'}}>-{material}</Text>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailMenu;
