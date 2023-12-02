import { Text, View, SafeAreaView, Image, TextInput, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import filterVN from '../filterVN';
import { attractions } from '../data/index.js';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  AttractionDetail: { attraction: { id: number, name: string, description: string, image: any } } | undefined;
};
const screenWidth = Dimensions.get('window').width;

// const attractions = [
//   {
//     id: 1,
//     name: 'Đền Bái Đính',
//     description: 'Đền Bái Đính là một ngôi đền lớn tại huyện Gia Viễn, tỉnh Ninh Bình, Việt Nam. Đền Bái Đính nằm ở núi Bái Sơn, cách trung tâm thành phố Ninh Bình khoảng 15 km về phía tây nam. Đền Bái Đính được xây dựng từ thế kỷ 11, thời kỳ Lý, nhưng đã bị thiêu hủy vào thời kỳ nhà Trần. Năm 2003, ngôi đền được xây dựng lại, và đến năm 2010, ngôi đền đã hoàn thành.',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bai_Dinh_Pagoda_2019.jpg/800px-Bai_Dinh_Pagoda_2019.jpg'
//   },
//   {
//     id: 2,
//     name: 'Hang Múa',
//     description: 'Hang Múa là một hang động nằm ở xã Ninh Xuân, huyện Hoa Lư, tỉnh Ninh Bình, cách trung tâm thành phố Ninh Bình khoảng 7 km về phía nam. Hang Múa có diện tích khoảng 800 m2, nằm ở độ cao 800 m so với mực nước biển, trên một ngọn núi có tên là Múa.',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Hang_Mua_2019.jpg/800px-Hang_Mua_2019.jpg'
//   },
//   {
//     id: 3,
//     name: 'Tràng An',
//     description: 'Tràng An là một di sản văn hóa và thiên nhiên thế giới tại Việt Nam, nằm ở xã Ninh Hải, huyện Hoa Lư, tỉnh Ninh Bình, cách trung tâm thành phố Ninh Bình khoảng 7 km về phía nam. Di sản này được UNESCO công nhận vào ngày 23 tháng 6 năm 2014, trong kỳ họp thứ 38 của Ủy ban Di sản thế giới.',
//   },
// ];

const AttractionScreen = () => {

  let [searchIp, setSearchIp] = useState('');
  let [active, setActive] = useState(0);
  const step = useRef<ScrollView>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (attractions.length > 0) {
      let index = 0;
      const autoScroll = () => {
        if (active === attractions.length - 1) {
          step.current?.scrollTo({ x: 0, y: 0, animated: true });
        } else {
          step.current?.scrollTo({ x: (active + 1) * screenWidth, y: 0, animated: true });
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

  const onchange = (nativeEvent: any) => {
    let slide = 0;
    if (nativeEvent.contentOffset.x != 0) {
      slide = Math.floor((nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth);
    } else {
      slide = 0;
    }
    if (slide != active) {
      setActive(slide);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white relative pt-8">
      <View className="w-full h-1/3">
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          className='flex w-full h-full'
          ref={step}
        >
          {
            attractions.map(attraction =>
              <View key={attraction.id}>
                <Image
                  source={attraction.image}
                  className='w-screen h-full'
                />
              </View>
            )
          }
        </ScrollView>

        <View className='absolute flex-row bottom-[10%] self-center'>
          {
            attractions.map((attraction, index) => (
              <Text key={index} className={`mx-2 text-xl ${index == active ? 'text-orange-300' : 'text-white'}`}>⬤</Text>
            ))
          }
        </View>
      </View>

      <View className="flex flex-col items-center justify-between">
        <View className='mx-6 flex flex-row bg-gray-100 -translate-y-4 items-center rounded-full px-5 shadow-md'>
          <FontAwesome name="search" size={20} color="#b1b1b1" className='' />
          <TextInput defaultValue={searchIp} onChangeText={text => setSearchIp(text)}
            placeholder='Tìm kiếm...' className='h-12 w-full text-lg pl-4'
          />
        </View>

        <View>
          <Text className='text-[#DC812D] text-xl font-bold'>Các Di tích tại Ninh Bình</Text>
        </View>
      </View>


      <ScrollView className='mt-4 mb-16'>
        {attractions.map(attraction => (
          <TouchableOpacity key={attraction.id} onPress={() => navigation.navigate('AttractionDetail', { attraction })}>
            {filterVN(attraction.name.toLowerCase()).includes(searchIp.toLowerCase()) &&
              <View className={`flex flex-row px-4 py-4 items-center justify-between ${attraction.id % 2 == 0 ? 'bg-[#f1f1f1]' : ''}`}>
                <Image
                  source={attraction.image}
                  className='flex w-[150px] h-[100px] rounded-xl'
                />

                <View className='flex-1 items-center text-center'>
                  <Text className='flex font-bold text-center text-xl'>{attraction.name}</Text>
                  <Text className='text-gray-500'>{attraction.description}</Text>
                </View>
              </View>
            }
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default AttractionScreen;