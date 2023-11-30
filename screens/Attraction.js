import { Text, View, SafeAreaView, Image, TextInput, ScrollView, Dimensions } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import filterVN from '../filterVN';

const screenWidth = Dimensions.get('window').width;
export default EventScreen = () => {

  let [searchIp, setSearchIp] = useState('');
  let [active, setActive] = useState(0);
  const step = useRef(null);

  const attractions = [
    {
      id: 0,
      name: 'Tràng An',
      description: 'Hello',
      image: 'https://ik.imagekit.io/tvlk/blog/2022/11/khu-du-lich-trang-an-2.jpg?tr=dpr-2,w-675'
    },
    {
      id: 1,
      name: 'Tam Cốc - Bích Động',
      description: 'Hello',
      image: 'https://static-images.vnncdn.net/files/publish/2023/7/8/ninh-binh-anh-so-du-lich-cc-1021-864.jpeg'
    },
    {
      id: 2,
      name: 'Hoa Lư',
      description: 'Hello',
      image: 'https://ik.imagekit.io/tvlk/blog/2023/05/co-do-hoa-lu-2.jpg?tr=dpr-2,w-675'
    },
    {
      id: 3,
      name: 'Hang Múa - Núi Múa',
      description: 'Hello',
      image: 'https://vcdn-dulich.vnecdn.net/2018/08/21/21-8-201839-301609698-w500-2654-1534827477.png'
    },
    {
      id: 4,
      name: 'Chùa Bái Đính',
      description: 'Hello',
      image: 'https://ik.imagekit.io/tvlk/blog/2022/08/chua-bai-dinh-1.jpg'
    },
    {
      id: 5,
      name: 'Non Nước',
      description: 'Hello',
      image: 'https://postumtravel.vn/wp-content/uploads/2022/07/nui-non-nuoc-2.jpg'
    },
  ]

  useEffect(() => {
    if (attractions.length > 0) {
      let index = 0;
      setInterval(() => {
        step.current.scrollTo({ x: index * screenWidth, y: 0, animated: true });
        index += 1;
        if (index === attractions.length) {
          index = 0;
        }
      }, 3000);
    }
  }, [])

  onchange = (nativeEvent) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width - 0.1);
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
                  source={{ uri: attraction.image }}
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
          <Text className='text-xl font-bold'>{active}</Text>
        </View>
      </View>


      <ScrollView className='mt-4 mb-16'>
        {attractions.map(attraction => (
          <View key={attraction.id}>
            {filterVN(attraction.name.toLowerCase()).includes(searchIp.toLowerCase()) &&
              <View className={`flex flex-row px-4 py-4 items-center justify-between ${attraction.id % 2 == 0 ? 'bg-[#f1f1f1]' : ''}`}>
                <Image
                  src={attraction.image}
                  className='flex w-[150px] h-[100px] rounded-xl'
                />

                <View className='flex-1 items-center text-center'>
                  <Text className='flex font-bold text-center text-xl'>{attraction.name}</Text>
                  <Text className='text-gray-500'>{attraction.description}</Text>
                </View>
              </View>
            }
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}