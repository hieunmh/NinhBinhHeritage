import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import EventScreen from '../screens/EventScreen';
import Attraction from '../screens/Attraction';
import Map from '../screens/Map';
import Service from '../screens/Service';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator className='bg-[#ffffff] rounded-[15] h-[90px]'>
      <Tab.Screen name='Di tích' component={Attraction} 
        options={{
          tabBarIcon: ({focused}) => {
            <View>
              <Text>Di tích</Text>
            </View>
          }
        }}
      />
      <Tab.Screen name='Bản đồ' component={Map} />
      <Tab.Screen name='Trang chủ' component={HomeScreen} />
      <Tab.Screen name='Sự kiện' component={EventScreen} />
      <Tab.Screen name='Dịch vụ' component={Service} />
    </Tab.Navigator>
  )
}

export default Tabs;