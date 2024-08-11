import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen.js';
import HomeScreen from './HomeScreen.js';
import ResetPasswordWithEmailScreen from './ResetPasswordWithEmailScreen.js'
import ResetPasswordWithPhoneScreen from './ResetPasswordWithPhoneScreen.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeScreen"  component={HomeScreen} />
        <Stack.Screen name="ResetPasswordWithEmail" component={ResetPasswordWithEmailScreen}/>
        <Stack.Screen name="ResetPasswordWithPhone" component={ResetPasswordWithPhoneScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
