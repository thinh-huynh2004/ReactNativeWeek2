import react from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Homepage from './Homepage';
import Detail from './Detail'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Homepage' component={Homepage}/>
        <Stack.Screen name='Detail' component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
