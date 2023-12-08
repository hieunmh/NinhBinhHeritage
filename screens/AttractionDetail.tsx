import React, { useCallback, useState } from "react";
import { View, Text, Image, Button, SafeAreaView, Alert, ScrollView, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import YoutubeIframe from "react-native-youtube-iframe";
import { AttractionType } from "../types/attractionType";

interface AttractionDetailProps {
  attraction: AttractionType | undefined;
  setShowAttractionDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const AttractionDetail: React.FC<AttractionDetailProps> = ({
  attraction,
  setShowAttractionDetail,
}) => {

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: any) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white pt-6 relative">
      <View className="flex-row">
        <View className="absolute m-auto left-0 right-0">
          <Text className="text-center text-orange-400 font-bold text-2xl">
            Danh lam thắng cảnh
          </Text>
        </View>
        <View className="relative mx-2">
          <AntDesign name="arrowleft" size={36} color="orange" onPress={() => setShowAttractionDetail(false)} />
        </View>
      </View>
      <View className="w-full h-1/3">
        <Image source={{ uri: attraction?.image }} className="w-full h-full" />
      </View>
      <View>
        <Text className="text-3xl text-center font-bold my-2">
          {attraction?.name}
        </Text>
      </View>
      <ScrollView className="flex-1">
        <View className="flex py-4 px-4">
          <Text className="font-bold text-2xl">Tổng quan</Text>
        </View>
        <View className="px-4">
          <Text className="text-xl text-justify">{attraction?.description}</Text>
        </View>
        <View className="flex py-4 px-4">
          <Text className="font-bold text-2xl">Video</Text>
        </View>
        <View className="px-4">
          <YoutubeIframe
            height={300}
            play={playing}
            videoId={attraction?.videoId}
            onChangeState={onStateChange}
          />
          <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

export default AttractionDetail;
