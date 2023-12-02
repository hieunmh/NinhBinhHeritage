import React from "react";
import { View, Text, Image, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

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
    <View>
      <Image source={attraction.image} style={{ width: 200, height: 200 }} />
      <View>
        <Text>{attraction.name}</Text>
      </View>
      <View>
        <Text>{attraction.description}</Text>
      </View>
      <View>
        <Button
          title="Back"
          onPress={() => {
            setShowAttractionDetail(false);
          }}
        />
      </View>
    </View>
  );
};

export default AttractionDetail;
