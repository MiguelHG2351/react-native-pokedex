import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Account} from '../screens/Account';

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Mi cuenta',
        }}
      />
    </Stack.Navigator>
  );
}
