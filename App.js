import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import AddMenu from './src/screens/AddMenu';
import SplashScreen from './src/screens/SplashScreen'
import Register from './src/screens/Register';
import EditMenu from './src/screens/EditMenu';
import IndexRoute from './src/IndexRoute';
import InputMenu from './src/screens/InputMenu';
import EditProfile from './src/screens/EditProfile';
import SavedLikedMenu from './src/screens/SavedLikedMenu';
import PopularMenu from './src/screens/PopularMenu';
import DetailMenu from './src/screens/DetailMenu';
import ActivateUser from './src/screens/ActivateUser';
import DessertPage from './src/screens/DessertPage';
import MainCoursePage from './src/screens/MainCoursePage';
import AppetizerPage from './src/screens/AppetizerPage';
import NewMenuPage from './src/screens/NewMenuPage';
import SavedBookmarkedMenu from './src/screens/SavedBookmarkedMenu';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="IndexRoute" component={IndexRoute} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AddMenu" component={AddMenu} />
        <Stack.Screen name="EditMenu" component={EditMenu} />
        <Stack.Screen name="InputMenu" component={InputMenu} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="SavedLikedMenu" component={SavedLikedMenu} />
        <Stack.Screen name="PopularMenu" component={PopularMenu} />
        <Stack.Screen name="DetailMenu" component={DetailMenu} />
        <Stack.Screen name="ActivateUser" component={ActivateUser} />
        <Stack.Screen name="DessertPage" component={DessertPage} />
        <Stack.Screen name="MainCoursePage" component={MainCoursePage} />
        <Stack.Screen name="AppetizerPage" component={AppetizerPage} />
        <Stack.Screen name="NewMenuPage" component={NewMenuPage} />
        <Stack.Screen name="SavedBookmarkedMenu" component={SavedBookmarkedMenu} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;