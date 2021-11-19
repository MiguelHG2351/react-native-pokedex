import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Pokedex} from '../screens/Pokedex';
import {Pokemon} from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={Pokedex} />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{title: '', headerTransparent: true, headerShadowVisible: false}}
      />
    </Stack.Navigator>
  );
}
