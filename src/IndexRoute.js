import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Search from './screens/Search';
import InputMenu from './screens/InputMenu';
import Profile from './screens/Profile';
import UpdatedProfile from './screens/UpdatedProfile';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function IndexRoute() {
  const screenOptions = {
    tabBarStyle: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      elevation: 5,
    },
    tabBarLabelStyle: {
      color: 'grey', // Default label color
    },
    tabBarActiveTintColor: '#EFC81A', // Active tab label color
  };

  const getTabBarIcon = (iconName, focused) => {
    const iconColor = focused ? '#EFC81A' : 'grey';

    return <Ionicons name={iconName} size={30} color={iconColor} />;
  };

  return (
    // <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} initialRouteName="SplashScreen">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => getTabBarIcon('home-sharp', focused),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => getTabBarIcon('search-sharp', focused),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Input Menu"
          component={InputMenu}
          options={{
            tabBarIcon: ({focused}) =>
              getTabBarIcon('add-circle-sharp', focused),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UpdatedProfile}
          options={{
            tabBarIcon: ({focused}) => getTabBarIcon('person-sharp', focused),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default IndexRoute;
