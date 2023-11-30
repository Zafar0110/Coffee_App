import { StyleSheet, Text, View } from 'react-native'
import React  from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import DetailScreen from './src/screens/DetailScreen'
import PaymentScreen from './src/screens/PaymentScreen'
import TabNavigator from './src/navigators/TabNavigator'
import { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import LogInScreen from './src/screens/LogInScreen'
import SingUpScreen from './src/screens/SingUpScreen'
import IntroScreen from './src/screens/IntroScreen'

const stack = createNativeStackNavigator();

export default function App() {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name='IntroScreen' component={IntroScreen} 
        options={{animation: 'slide_from_bottom'}}></stack.Screen>
      <stack.Screen name='TabNavigator' component={TabNavigator} 
        options={{animation: 'slide_from_bottom'}}></stack.Screen>
        <stack.Screen name='Details' component={DetailScreen} 
        options={{animation: 'slide_from_bottom'}}></stack.Screen>
        <stack.Screen name='Payment' component={PaymentScreen} 
        options={{animation: 'slide_from_bottom'}}></stack.Screen>
        <stack.Screen name='LogInScreen' component={LogInScreen} 
        options={{animation: 'slide_from_bottom'}}></stack.Screen>
        <stack.Screen name='SingUpScreen' component={SingUpScreen} 
        options={{animation: 'slide_from_bottom'}}></stack.Screen>
        
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})