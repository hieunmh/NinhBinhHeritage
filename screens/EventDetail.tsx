import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

type EventStackParamList = {
  EventDetail: {
    event: {
      name: string,
      description: string
    }
  } 
}

type EventDetailScreenNavigationProp = NativeStackNavigationProp<EventStackParamList, "EventDetail">
type EventDetailScreenRouteProp = RouteProp<EventStackParamList, "EventDetail">

interface EventDetailProps {
  navigation: EventDetailScreenNavigationProp,
  route: EventDetailScreenRouteProp
}


const EventDetail: React.FC<EventDetailProps> = ({ navigation, route }) => {

  const { event } = route.params;

  return (
    <View className="w-full gap-4">
      <View className="gap text-xs font-bold tracking-tight text-white">
        <Text className="flex text-center text-xl font-bold">
          {event?.name} 123
        </Text>
        <Text className="flex text-center opacity-50">
          {event?.description}
        </Text>
      </View>
    </View>
  );
};

export default EventDetail;
