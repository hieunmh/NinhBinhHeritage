import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { IconBack } from "../assets/icon";

interface AttractionDetailProps {
  attraction: {
    id: number;
    name: string;
    description: string;
    image: any;
  };
  setShowAttractionDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const AttractionDetail: React.FC<AttractionDetailProps> = ({
  attraction,
  setShowAttractionDetail,
}) => {
  return (
    <View className="w-full gap-4">
      <TouchableOpacity
        className="flex flex-row items-center gap-2"
        onPress={() => {
          setShowAttractionDetail(false);
        }}
      >
        <View className="w-6 h-6">
          <IconBack />
        </View>
        <Text className="text-[#DC812D]">Trở về</Text>
      </TouchableOpacity>
      <Image source={attraction.image} className="w-full h-1/2" />
      <View className="gap text-xs font-bold tracking-tight text-white">
        <Text className="flex text-center text-xl font-bold">
          {attraction.name}
        </Text>
        <Text className="flex text-center opacity-50">
          {attraction.description}
        </Text>
      </View>
    </View>
  );
};

export default AttractionDetail;
