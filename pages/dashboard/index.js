import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Importez vos composants de pages ici
import HomeScreen from './screens/HomeScreen';
import ParkingListScreen from './screens/ParkingListScreen';
import UserProfileScreen from './screens/UserProfileScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <Icon
            name="ios-menu"
            size={30}
            color="#000"
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 16 }}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const ParkingListStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ParkingList"
      component={ParkingListScreen}
      options={{
        headerLeft: () => (
          <Icon
            name="ios-menu"
            size={30}
            color="#000"
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 16 }}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const UserProfileStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="UserProfile"
      component={UserProfileScreen}
      options={{
        headerLeft: () => (
          <Icon
            name="ios-menu"
            size={30}
            color="#000"
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 16 }}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Parkings" component={ParkingListStack} />
    <Tab.Screen name="Profile" component={UserProfileStack} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="MainTabs">
      <Drawer.Screen name="MainTabs" component={MainTabs} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;
