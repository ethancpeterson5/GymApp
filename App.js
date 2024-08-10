import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen.js';
import ResetPasswordWithEmailScreen from './ResetPasswordWithEmailScreen.js'
import ResetPasswordWithPhoneScreen from './ResetPasswordWithEmailScreen.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ResetPasswordWithEmail" component={ResetPasswordWithEmailScreen}/>
        <Stack.Screen name="ResetPasswordWithPhone" component={ResetPasswordWithEmailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
