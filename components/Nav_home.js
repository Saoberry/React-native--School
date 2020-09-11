import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Students from './Students';
import Lessons from './Lessons';

// On utilise la classe createStackNavigator de React navigation
const Stack = createStackNavigator();

export const Nav = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Students" component={Students} />
            <Stack.Screen name="Lessons" component={Lessons} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
