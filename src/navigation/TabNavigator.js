import { View, Image, StyleSheet, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'
import Search from '../Screens/Search'
import AddEvent from '../Screens/AddEvent'
import MyEvents from '../Screens/MyEvents'
import Profile from '../Screens/Profile'
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { 
        position: 'absolute', 
        height: 80, 
        backgroundColor: 'black', 
        opacity: 0.7,
        borderRadiusTop: 15,
      },
    }}>
      <Tab.Screen name='Home' component={Home} 
      options = {{
        tabBarIcon: ({focused}) => {
          <View style ={{alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image source={require('../assets/searchSearchIcon.png')}
            resizeMode= 'contain'
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#e32f45' : '#748c94'
            }}
            />

            <Text style ={{color: 'white'}}>Home</Text>
          </View>
        },
      }}/>
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Add Event' component={AddEvent} />
      <Tab.Screen name='My Events' component={MyEvents} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
    
  )
}

export default TabNavigator