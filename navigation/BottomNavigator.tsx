import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AttractionScreen from "../screens/Attraction";
import MapScreen from "../screens/Map";
import ServiceScreen from "../screens/Service";

import { Entypo, FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import EventNavigator from "./EventNavigator";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#fca906",
          tabBarActiveBackgroundColor: "#fff",
          tabBarInactiveBackgroundColor: "#fff",
          tabBarStyle: {
            borderWidth: 0,
            borderRadius: 0,
            height: 80,
            paddingBottom: 18,
            position: "absolute",
          },
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name="Trang chủ"
          component={AttractionScreen}
          options={{
            tabBarLabel: "Trang chủ",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="castle" size={24} color="#fca906" />
              ) : (
                <MaterialCommunityIcons name="castle" size={24} color="#c0c8ca" />
              ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />

        <Tab.Screen
          name="Bản đồ"
          component={MapScreen}
          options={{
            tabBarLabel: "Bản đồ",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="map-marker-alt" size={24} color="#fca906" />
              ) : (
                <FontAwesome5 name="map-marker-alt" size={24} color="#c0c8ca" />
              ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />

        <Tab.Screen
          name="Sự kiện"
          component={EventNavigator}
          options={{
            tabBarLabel: "Sự kiện",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="calendar-day" size={24} color="#fca906" />
              ) : (
                <FontAwesome5 name="calendar-day" size={24} color="#c0c8ca" />
              ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />

        <Tab.Screen
          name="Dịch vụ"
          component={ServiceScreen}
          options={{
            tabBarLabel: "Dịch vụ",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="appstore1" size={24} color="#fca906" />
              ) : (
                <AntDesign name="appstore1" size={24} color="#c0c8ca" />
              ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
            headerRight: () => (
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    // color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            ),
            headerStyle: {
              backgroundColor: '#33EEFF',
              shadowColor: 'transparent',
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigator;
