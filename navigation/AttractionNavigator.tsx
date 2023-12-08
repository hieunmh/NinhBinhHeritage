import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AttractionScreen from '../screens/Attraction';
import AttractionDetail from '../screens/AttractionDetail';
import { Colors } from '../constants/Colors';

const Stack = createNativeStackNavigator();
const AttractionNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Attraction'>
      <Stack.Screen
        name="Attraction"
        component={AttractionScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AttractionDetail"
        component={AttractionDetail as any}
        options={{
          headerShown: true,
          headerTitle: 'Danh lam thắng cảnh',
          headerStyle: {
            backgroundColor: Colors.light.yellow,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default AttractionNavigator