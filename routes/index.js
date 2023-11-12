import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import BottomTabs from '../pages/tabs';
import ParkingList from '../pages/parkings';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import ParkingListPage from '../pages/parkings';
import ParkingDetailPage from '../pages/parkings/details';
import ParkingEtagePage from '../pages/parkings/etage';
import ParkingPlacePage from '../pages/parkings/place';
import ReservationPage from '../pages/parkings/reservation';
import DashboardAdmin from '../pages/dashboard';

const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='heme' 
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={BottomTabs} />
        <Stack.Screen name="ParkingListPage" component={ParkingListPage} />
        <Stack.Screen name="ParkingDetailPage" component={ParkingDetailPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="ParkingEtagePage" component={ParkingEtagePage} />
        <Stack.Screen name="ParkingPlacePage" component={ParkingPlacePage} />
        <Stack.Screen name="DashboardAdmin" component={DashboardAdmin} />
        {/* <Stack.Screen name="ReservationPage" component={ReservationPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route