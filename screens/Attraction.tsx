import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import filterVN from "../filterVN";
import { attractions } from "../data/AttractionData";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AttractionDetail from "./AttractionDetail";
import { supabase } from "../lib/supabase";

export type RootStackParamList = {
  AttractionDetail:
  | {
    attraction: {
      id: number;
      name: string;
      description: string;
      image: any;
    };
  }
  | undefined;
};
const screenWidth = Dimensions.get("window").width;

const AttractionScreen = () => {
  let [searchIp, setSearchIp] = useState("");
  let [active, setActive] = useState(0);
  const step = useRef<ScrollView>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [showMainComponent, setShowMainComponent] = useState(false);
  const [showAttractionDetail, setShowAttractionDetail] = useState(false);
  const [idAttraction, setIdAttraction] = useState<number | null>(null);
  useEffect(() => {
    navigation.addListener("focus", () => {
      setShowAttractionDetail(false);
      setShowMainComponent(false);
      setSearchIp("");
    });
  }, [showMainComponent]);
  useEffect(() => {
    if (attractions.length > 0) {
      let index = 0;
      const autoScroll = () => {
        if (active === attractions.length - 1) {
          step.current?.scrollTo({ x: 0, y: 0, animated: true });
        } else {
          step.current?.scrollTo({
            x: (active + 1) * screenWidth,
            y: 0,
            animated: true,
          });
        }
      };
      intervalRef.current = setInterval(autoScroll, 3000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [active]);

  let [data, setData] = useState<any>();


  useEffect(() => {
    const getAttraction = async () => {
      const { data, error } = await supabase.from('attraction').select('*')
      setData(data);
    }

    getAttraction();
  })

  const onchange = (nativeEvent: any) => {
    let slide = 0;
    if (nativeEvent.contentOffset.x != 0) {
      slide = Math.floor(
        (nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth
      );
    } else {
      slide = 0;
    }
    if (slide != active) {
      setActive(slide);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white relative pt-8">
      {showMainComponent ? (
        showAttractionDetail ? (
          <AttractionDetail
            attraction={attractions[idAttraction!]}
            setShowAttractionDetail={setShowAttractionDetail}
          />
        ) : (
          <>
            <View className="w-full h-1/3">
              <ScrollView
                onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                className="flex w-full h-full"
                ref={step}
              >
                {attractions.map((attraction) => (
                  <View key={attraction.id}>
                    <Image
                      source={attraction.image}
                      className="w-screen h-full"
                    />
                  </View>
                ))}
              </ScrollView>

              <View className="absolute flex-row bottom-[10%] self-center">
                {attractions.map((attraction, index) => (
                  <Text
                    key={index}
                    className={`mx-2 text-xl ${index == active ? "text-orange-300" : "text-white"
                      }`}
                  >
                    ⬤
                  </Text>
                ))}
              </View>
            </View>

            <View className="flex flex-col items-center justify-between">
              <View className="mx-6 flex flex-row bg-gray-100 -translate-y-4 items-center rounded-full px-5 shadow-md">
                <FontAwesome
                  name="search"
                  size={20}
                  color="#b1b1b1"
                  className=""
                />
                <TextInput
                  defaultValue={searchIp}
                  onChangeText={(text) => setSearchIp(text)}
                  placeholder="Tìm kiếm..."
                  className="h-12 w-full text-lg pl-4"
                />
              </View>

              <View>
                <Text className="text-[#DC812D] text-xl font-bold">
                  Các Di tích tại Ninh Bình
                </Text>
              </View>
            </View>
            <ScrollView className="mt-4 mb-16">
              <View className="gap-4">
                {attractions.map((attraction, index) => (
                  <View
                    key={index}
                    className={`h-fit flex flex-col justify-center items-center px-4 py-2 gap-4 ${index % 2 == 0 ? "" : "bg-[#f1f1f1]"
                      }`}
                  >
                    {filterVN(attraction.name.toLowerCase()).includes(
                      searchIp.toLowerCase()
                    ) && (
                        <>
                          <View className="flex flex-col justify-center items-center">
                            <Image
                              source={attraction.image}
                              className={`rounded w-[181px] h-[181px]`}
                            />
                          </View>
                          <View className="gap text-xs font-bold tracking-tight text-white opacity-50">
                            <Text className="flex font-bold text-center text-xl">
                              {attraction.name}
                            </Text>
                            <Text>
                              {attraction.description.slice(0, 100) + "..."}
                            </Text>
                            <TouchableOpacity
                              onPress={() => {
                                setIdAttraction(index);
                                setShowAttractionDetail(true);
                              }}
                            >
                              <Text className="flex text-center text-[#DC812D] font-bold">
                                Xem thêm
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      )}
                  </View>
                ))}
              </View>
            </ScrollView>
          </>
        )
      ) : (
        <View className="w-full">
          <Image
            className="h-full"
            source={require("../images/chuabaidinh.jpg")}
          />
          <View className="absolute w-fit bg-white/50 flex-col gap-2 items-center justify-center px-4 py-2 rounded-lg self-center bottom-[10%]">
            <Text className=" w-fit text-4xl text-[#fca906] font-black">
              Ninh Bình Heritage
            </Text>
            <TouchableOpacity
              className="w-1/2 flex items-center rounded bg-[#fca906]"
              onPress={() => setShowMainComponent(true)}
            >
              <Text className="text-white text-3xl font-bold">Bắt đầu</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AttractionScreen;
