import { Text, View, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';
import filterVN from '../filterVN';

export default EventScreen = () => {

  let [searchIp, setSearchIp] = useState('');


  const events = [
    {
      id: 0,
      name: 'trinh dien mua nuoc',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      id: 1,
      name: 'trinh dien tieu nhac',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      id: 2,
      name: 'trình tấu đại nhạc',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      id: 3,
      name: 'trình diễn đại nhạc',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      id: 4,
      name: 'triển lãm hóa thạch',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      id: 5,
      name: 'lễ đổi gác',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      id: 6,
      name: 'trình diễn đại nhạc',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    { 
      id: 7,
      name: 'trình diễn đại nhạc',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
    {
      id: 8,
      name: 'trình diễn đại nhạc',
      description: 'từ 8:30 đến 9:45 hằng ngày'
    },
  ]

  return (
    <SafeAreaView className="flex-1 bg-white relative pt-8">
      <View className="flex flex-col items-center justify-between">
        <Image 
          src='https://baoninhbinh.org.vn/DATA/ARTICLES/2022/11/15/-emagazine-su-kien-festival-trang-an-ket-noi-di-san-ninh-e07ee.jpg'
          className='w-full h-[260px]'
        />
        <View className='mx-6 flex flex-row bg-gray-50 -translate-y-4 items-center rounded-full px-5 shadow-md'>
          <FontAwesome name="search" size={20} color="#b1b1b1" className='' />
          <TextInput defaultValue={searchIp} onChangeText={text => setSearchIp(text)} 
            placeholder='Tìm kiếm...' className='h-12 w-full text-lg pl-4' 
          />
        </View>

        <View>
          <Text className='text-[#DC812D] text-xl font-bold'>Các Sự kiện - Lễ hội tại Ninh Bình</Text>
        </View>
      </View>


      <ScrollView className='mt-4'>
        {events.map(event => (
          <View key={event.id}>
            {filterVN(event.name.toLowerCase()).includes(searchIp.toLowerCase()) &&
              <View className={`flex flex-row px-4 py-4 items-center justify-between ${event.id % 2 == 0 ? 'bg-[#f1f1f1]' : ''}`}>
                <Image 
                  src='https://baoninhbinh.org.vn/DATA/ARTICLES/2022/11/15/-emagazine-su-kien-festival-trang-an-ket-noi-di-san-ninh-e07ee.jpg' 
                  className='w-[150px] h-[100px] rounded-xl' 
                />
                
                <View className='text-center'>
                  <Text className='font-bold text-center text-xl'>{event.name}</Text>
                  <Text className='text-gray-500'>{event.description}</Text>
                </View>
              </View>
            }
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}