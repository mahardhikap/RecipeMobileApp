import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import GlobalStyle from '../assets/styles/style';

const styles = StyleSheet.create({
  input_search: {
    padding: 20,
    backgroundColor: '#e5e5e5',
    borderRadius: 15,
    fontFamily: 'Poppins-Medium',
    color: '#aaaaaa',
  },
});

const SearchBar = (props) => {

  return (
    <View>
      <TextInput
        onChangeText={props.changeText}
        style={styles.input_search}
        placeholder="Search Pasta, Bread, etc"
        placeholderTextColor="#aaaaaa"
      />
    </View>
  );
};

export default SearchBar;
