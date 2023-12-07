import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ServiceScreen from '../screens/Service';
import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import TicketScreen from '../screens/Ticket';
import ElectricCarScreen from '../screens/ElectricCar';
import FoodScreen from '../screens/Food';
import AudioScreen from '../screens/Audio';
import TourScreen from '../screens/Tour';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();
const ServiceNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Service'>
      <Stack.Screen
        name="Service"
        component={ServiceScreen}
        options={{
          headerShown: true,
          headerTitle: 'Dịch vụ',
          headerRight: () => (
            <TouchableOpacity onPress={() => { alert('setting') }}>
              <AntDesign name="setting" size={25} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: Colors.yellow,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name='Ticket'
        component={TicketScreen}
        options={{
          headerShown: true,
          headerTitle: 'Vé điện tử',
          headerStyle: {
            backgroundColor: Colors.yellow,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name='ElectricCar'
        component={ElectricCarScreen}
        options={{
          headerShown: true,
          headerTitle: 'Xe điện',
          headerStyle: {
            backgroundColor: Colors.yellow,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name='Food'
        component={FoodScreen}
        options={{
          headerShown: true,
          headerTitle: 'Đồ ăn',
          headerStyle: {
            backgroundColor: Colors.yellow,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name='Audio'
        component={AudioScreen}
        options={{
          headerShown: true,
          headerTitle: 'Adudio',
          headerStyle: {
            backgroundColor: Colors.yellow,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name='Tour'
        component={TourScreen}
        options={{
          headerShown: true,
          headerTitle: 'Đặt tour',
          headerStyle: {
            backgroundColor: Colors.yellow,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />

    </Stack.Navigator>
  );
};
export default ServiceNavigator;