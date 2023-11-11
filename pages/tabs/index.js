import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginPage from '../login';
import RegisterPage from '../register';
import ParkingDetailPage from '../parkings/details';
import HomePage from '../home';

const Tab = createBottomTabNavigator();


const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="tabs_home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown : false
      }}
    >
      <Tab.Screen
        name="tabs_home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reservation"
        component={LoginPage}
        options={{
          tabBarLabel: 'Reservationme',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Parametres"
        component={RegisterPage}
        options={{
          tabBarLabel: 'parametres',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    );
}

export default BottomTabs