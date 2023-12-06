import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Image, Button, ScrollView } from "react-native";
import { EventType } from "../types/eventType";

type EventStackParamList = {
  EventDetail: {
    event: EventType
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
    <View className="w-full gap-4 mt-4">
      <Image alt='image' className="w-full h-[230px]"
        source={{ uri: event.image }}
      />

      <ScrollView>
        <View className="gap text-xs font-bold text-white">
          <Text className="flex text-center text-3xl font-bold">
            {event.name}
          </Text>
          <Text className="flex text-center text-lg">
            {event.time}
          </Text>
          <Text className="flex text-center opacity-50 mb-4 text-lg">
            { event.address }
          </Text>
          <Text className="flex text-center opacity-50 text-lg">
            { event.description }
          </Text>
        </View>
        <Button onPress={() => navigation.goBack()} title="Back" />
      </ScrollView>
    </View>
  );
};

export default EventDetail;
