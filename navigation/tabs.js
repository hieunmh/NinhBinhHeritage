import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import EventScreen from '../screens/Event';
import AttractionScreen from '../screens/Attraction';
import MapScreen from '../screens/Map';
import ServiceScreen from '../screens/Service';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fca906",
        tabBarActiveBackgroundColor: "#fff",
        tabBarInactiveBackgroundColor: "#fff",
        tabBarStyle: {
          borderWidth: 0,
          borderRadius: 0,
          height: 60,
          paddingBottom: 5,
          position: 'absolute',
        },
        tabBarHideOnKeyboard: true,
      }}

    >
      <Tab.Screen name='Trang chủ' component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          headerShown: true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="#fca906" />
            ) : (
              <Entypo name="home" size={24} color="#c0c8ca" />
            ),
          tabBarLabelStyle: {
            fontSize: 12
          }
        }}
      />

      <Tab.Screen name='Di tích' component={AttractionScreen}
        options={{
          tabBarLabel: 'Di tích',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="castle" size={24} color="#fca906" />
            ) : (
              <MaterialCommunityIcons name="castle" size={24} color="#c0c8ca" />
            ),
          tabBarLabelStyle: {
            fontSize: 12
          }
        }}
      />

      <Tab.Screen name='Bản đồ' component={MapScreen}
        options={{
          tabBarLabel: 'Bản đồ',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="map-marker-alt" size={24} color="#fca906" />
            ) : (
              <FontAwesome5 name="map-marker-alt" size={24} color="#c0c8ca" />
            ),
          tabBarLabelStyle: {
            fontSize: 12
          }
        }}
      />

      <Tab.Screen name='Sự kiện' component={EventScreen}
        options={{
          tabBarLabel: 'Sự kiện',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="calendar-day" size={24} color="#fca906" />
            ) : (
              <FontAwesome5 name="calendar-day" size={24} color="#c0c8ca" />
            ),
          tabBarLabelStyle: {
            fontSize: 12
          }
        }}
      />

      <Tab.Screen name='Dịch vụ' component={ServiceScreen}
        options={{
          tabBarLabel: 'Dịch vụ',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="appstore1" size={24} color="#fca906" />
            ) : (
              <AntDesign name="appstore1" size={24} color="#c0c8ca" />
            ),
          tabBarLabelStyle: {
            fontSize: 12
          }
        }}

      />
    </Tab.Navigator>
  )
}

export default Tabs;