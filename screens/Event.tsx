import { Text, View, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import filterVN from '../filterVN';
import { TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export type EventStackParamList = {
  EventDetail:
    {
      event: {
        name: string;
        description: string;
      };
    }
    
};

const EventScreen = () => {

  let [searchIp, setSearchIp] = useState('');


  const events = [
    {
      name: 'trinh dien mua nuoc',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      name: 'trinh dien tieu nhac',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      name: 'trình tấu đại nhạc',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      name: 'trình diễn đại nhạc',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      name: 'triển lãm hóa thạch',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      name: 'lễ đổi gác',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      name: 'trình diễn đại nhạc',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      name: 'trình diễn đại nhạc',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      name: 'trình diễn đại nhạc',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
  ]

  const navigation = useNavigation<NativeStackNavigationProp<EventStackParamList>>();

  const filterEvent = events.filter(event => {
    return filterVN(event.name.toLowerCase()).includes(searchIp.toLowerCase())
  })

  return (
    <SafeAreaView className="flex-1 bg-white relative pt-8">
      <View className="flex flex-col items-center justify-between">
        <Image
          source={require('../images/chuabaidinh.jpg')}
          className='w-full h-[200px]'
        />
        <View className='mx-6 flex flex-row bg-gray-50 -translate-y-6 items-center rounded-full px-5 shadow-md'>
          <FontAwesome name="search" size={20} color="#b1b1b1" className='' />
          <TextInput defaultValue={searchIp} onChangeText={text => setSearchIp(text)}
            placeholder='Tìm kiếm...' className='h-12 w-full text-lg pl-4'
            onPressIn={(e) => {
              // if (e.nativeEvent.key == 'Enter') {

              //   e.target.blur()
              // }
            }}
          />
        </View>
      </View>

      <View className='-translate-y-2'>
        <Text className='text-[#DC812D] w-full text-center text-2xl font-bold'>Các Sự kiện - Lễ hội tại Ninh Bình</Text>
      </View>

      <ScrollView className='mt-2 mb-[60px]'>
        {filterEvent.map((event, id) => (
          <TouchableOpacity key={id} onPress={() => navigation.navigate('EventDetail', { event })} >
            <View className={`flex flex-row px-4 py-4 items-center justify-between ${id % 2 == 0 ? 'bg-[#f1f1f1]' : ''}`}>
              <Image alt=''
                className='w-[150px] h-[100px] rounded-xl' 
                source={{ uri: 'https://baoninhbinh.org.vn/DATA/ARTICLES/2022/11/15/-emagazine-su-kien-festival-trang-an-ket-noi-di-san-ninh-e07ee.jpg' }}
              />

              <View className='text-center'>
                <Text className='font-bold text-center text-xl'>{event.name}</Text>
                <Text className='text-gray-500'>{event.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default EventScreen;