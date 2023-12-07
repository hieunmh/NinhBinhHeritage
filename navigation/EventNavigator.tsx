import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventDetail from '../screens/EventDetail';
import EventScreen from '../screens/Event';

const Stack = createNativeStackNavigator();
const EventNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Event"
                component={EventScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="EventDetail"
                component={EventDetail as any}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
export default EventNavigator;