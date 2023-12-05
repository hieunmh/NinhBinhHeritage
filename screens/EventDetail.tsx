import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";

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
    <View className="w-full gap-4 mt-4">
      <Button onPress={() => navigation.goBack()} title="Back" />
      <View>
        
      </View>
      <Image source={require('../images/HoaLu.jpg')} className="w-full h-1/2" />
      <View className="gap text-xs font-bold tracking-tight text-white">
        <Text className="flex text-center text-xl font-bold">
          Lễ hội cố đô Hoa Lư
          - Thời gian diễn ra: 15/2 âm lịch hoặc từ ngày 6/3 - 10/3 âm lịch

          - Địa điểm: khu di tích văn hóa Cố đô Hoa Lư, huyện Trường Yên, tỉnh Ninh Bình.
        </Text>
        <Text className="flex text-center opacity-50">
          k
        </Text>
      </View>
    </View>
  );
};

export default EventDetail;
