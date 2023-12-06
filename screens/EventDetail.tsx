import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Image, Button, ScrollView, TouchableOpacity } from "react-native";
import { EventType } from "../types/eventType";
import { AntDesign } from '@expo/vector-icons'; 
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView className="w-full">
      <TouchableOpacity className="h-12 w-full bg-[#fca906] flex flex-row justify-start items-center px-2"
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={30} color="#fff" 
           className=""
        />
        <Text className="text-white font-semibold text-2xl ml-4">Sự kiện</Text>
      </TouchableOpacity>

      <ScrollView className="w-full h-[750px]">
        <Image alt='image' className="w-full h-[230px]"
          source={{ uri: event.image }}
        />
        
        <View className="gap text-xs font-bold text-white mx-4 mt-4">
          <Text className="flex text-justify text-3xl font-bold mb-1">
            {event.name}
          </Text>

          <Text className="text-lg text-justify font-bold">
            {event.time}
          </Text>

          <Text className="mb-4 text-lg text-justify font-bold">
            { event.address }
          </Text>

          <Text className="text-xl text-gray-500 text-justify">
            { event.description }
          </Text>
          <View className=" w-full h-4">
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetail;
