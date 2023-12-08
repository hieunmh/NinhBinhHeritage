import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import filterVN from '../filterVN';
import { TouchableOpacity } from 'react-native';
import { supabase } from '../lib/supabase';
import { EventType } from '../types/eventType';

const EventScreen = ({ navigation }: any) => {

  let [searchIp, setSearchIp] = useState('');

  let [events, setEvents] = useState<EventType[]>();


  const filterEvent = events?.filter(event => {
    return filterVN(event.name?.toLowerCase() || '').includes(searchIp.toLowerCase())

  })

  useEffect(() => {
    const getEvent = async () => {
      const { data, error } = await supabase.from('event').select() as unknown as { data: EventType[], error: any };
      setEvents(data);
    }

    getEvent();
  }, [])

  return (
    <View className="flex-1 bg-white relative">
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
        {filterEvent?.map((event, id) => (
          <TouchableOpacity key={id} onPress={() => navigation.navigate('EventDetail', { event })} >
            <View className={`flex flex-row px-4 py-4 items-center justify-between gap-3 ${id % 2 == 0 ? 'bg-[#f1f1f1]' : ''}`}>
              <Image alt=''
                className='w-[150px] h-[100px] rounded-xl'
                source={{ uri: event.image }}
              />

              <View className='text-center flex-1'>
                <Text className='font-bold text-start text-lg'>{event.name?.substring(0)}</Text>
                {/* <Text className='text-gray-500 ml-5'>{event.description?.substring(0, 100)} ...</Text> */}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default EventScreen;