import { Text, View, SafeAreaView, Image, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { useState } from 'react';

export default EventScreen = () => {

  let [searchIp, setSearchIp] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white relative pt-8">
      <View className="flex flex-col items-center justify-between">
        <Image 
          src='https://baoninhbinh.org.vn/DATA/ARTICLES/2022/11/15/-emagazine-su-kien-festival-trang-an-ket-noi-di-san-ninh-e07ee.jpg'
          className='w-full h-[260px]'
        />
        <View className='mx-6 flex flex-row bg-gray-50 -translate-y-4 items-center rounded-full px-5 shadow-md'>
          <FontAwesome name="search" size={20} color="#b1b1b1" className='' />
          <TextInput value={searchIp} onChange={(e) => setSearchIp(e.target.value)} placeholder='Tìm kiếm...' className='h-12 w-full text-lg pl-4' />
        </View>

        <View>
          <Text className='text-[#DC812D] text-xl font-bold'>Các Sự kiện - Lễ hội tại Ninh Bình</Text>
        </View>

        <View>

        </View>
      </View>
    </SafeAreaView>
  )
}