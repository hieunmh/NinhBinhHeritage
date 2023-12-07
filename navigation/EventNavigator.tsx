import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventDetail from '../screens/EventDetail';
import EventScreen from '../screens/Event';
import { Colors } from '../constants/Colors';

const Stack = createNativeStackNavigator();
const EventNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Event'>
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
                    headerShown: true,
                    headerTitle: 'Sự kiện',
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
    );
};

export default EventNavigator;