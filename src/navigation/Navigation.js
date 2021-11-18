import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'

import FavoriteNavigation from './FavoriteNavigation';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
      name="FavoritesScreen" 
      component={FavoriteNavigation} 
      options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ color, size }) => (
          <Icon name="favorite" color={color} size={size} />
          ),
        }} />
      <Tab.Screen 
      name="PokedexScreen" 
      component={PokedexNavigation} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          renderPokeBall()
        ),
      }} />
      <Tab.Screen 
      name="AccountScreen" 
      component={AccountNavigation} 
      options={{
        tabBarLabel: 'Cuenta',
        tabBarIcon: ({ color, size }) => (
          <Icon name="person" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}

function renderPokeBall() {
  return (
    <Image 
      source={require('../assets/pokeball.png')}
      style={{ width: 55, height: 55 }}  
    />
  )
}
