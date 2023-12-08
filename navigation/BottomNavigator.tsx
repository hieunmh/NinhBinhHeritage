import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../screens/Map";

import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EventNavigator from "./EventNavigator";
import ServiceNavigator from "./ServiceNavigator";
import AttractionNavigator from "./AttractionNavigator";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (

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
        component={AttractionNavigator}
        options={{
          tabBarLabel: "Trang chủ",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            <MaterialCommunityIcons name="castle" size={24} color={focused ? "#fca906" : "#c0c8ca"} />,
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
            <FontAwesome5 name="map-marker-alt" size={24} color={focused ? "#fca906" : "#c0c8ca"} />,
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
            <FontAwesome5 name="calendar-day" size={24} color={focused ? "#fca906" : "#c0c8ca"} />,
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />

      <Tab.Screen
        name="Dịch vụ"
        component={ServiceNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Dịch vụ",
          tabBarIcon: ({ focused }) =>
            <AntDesign name="appstore1" size={24} color={focused ? "#fca906" : "#c0c8ca"} />,
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
