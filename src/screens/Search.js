import {ScrollView, View} from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';
import GlobalStyle from '../assets/styles/style';

const Search = () => (
  <ScrollView>
    <View style={GlobalStyle.container_bootstrap}>
    <View style={{marginTop:20}}>
        <SearchBar />
    </View>
    </View>
  </ScrollView>
);

export default Search;
