import React from "react";
import { View, Text, Image, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
    AttractionDetail: { attraction: { image: any; name: string; description: string } };
};

type AttractionDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "AttractionDetail">;
type AttractionDetailScreenRouteProp = RouteProp<RootStackParamList, "AttractionDetail">;

interface AttractionDetailProps {
    navigation: AttractionDetailScreenNavigationProp;
    route: AttractionDetailScreenRouteProp;
}

const AttractionDetail: React.FC<AttractionDetailProps> = ({ navigation, route }) => {
    const { attraction } = route.params;

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
                        navigation.goBack();
                    }}
                />
            </View>
        </View>
    );
};

export default AttractionDetail;

