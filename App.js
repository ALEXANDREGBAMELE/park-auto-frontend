import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Route from './routes';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <View style={{flex: 1}}>
      <Route/>
    </View>
  );
}