import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { HappyScreen } from '../screens/HappyScreen';
import { SadScreen } from '../screens/SadScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home Screen' }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings Screen' }}
      />
      <Stack.Screen
        name="Happy"
        component={HappyScreen}
        options={{ title: 'Happy Screen' }}
      />
      <Stack.Screen
        name="Sad"
        component={SadScreen}
        options={{ title: 'Sad Screen' }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'HOME',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 10,
              color: 'green',
            },
            headerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 0.2,
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerTitle: 'Settings',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 10,
              color: 'green',
            },
            headerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 0.2,
            },
          }}
        />
        <Tab.Screen
          name="Happy"
          component={HappyScreen}
          options={{
            headerTitle: 'Happy',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 10,
              color: 'green',
            },
            headerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 0.2,
            },
          }}
        />
        <Tab.Screen
          name="Sad"
          component={SadScreen}
          options={{
            headerTitle: 'Sad',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 10,
              color: 'green',
            },
            headerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 0.2,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
