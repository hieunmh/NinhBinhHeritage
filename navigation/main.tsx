import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './tabs';
import { StatusBar } from 'react-native';
import AttractionDetail from '../screens/AttractionDetail';
const Stack = createNativeStackNavigator();
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Root"
                    component={Tabs}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="AttractionDetail"
                    component={AttractionDetail as any}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MainNavigator;