import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ServiceScreen from '../screens/Service';
import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import TicketScreen from '../screens/Ticket';
import ElectricCarScreen from '../screens/ElectricCar';
import FoodScreen from '../screens/Food';
import AudioScreen from '../screens/Audio';
import TourScreen from '../screens/Tour';
import { Colors } from '../constants/Colors';
import SettingScreen from '../screens/Setting';

const Stack = createNativeStackNavigator();
const ServiceNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Service'
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.light.yellow,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Service"
        component={ServiceScreen}
        options={({ navigation }) => ({
          headerTitle: 'Dịch vụ',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <AntDesign name="setting" size={25} color="#fff" />
            </TouchableOpacity>
          )
        })}
      />

      <Stack.Screen
        name='Ticket'
        component={TicketScreen}
        options={{
          headerTitle: 'Vé điện tử',
        }}
      />

      <Stack.Screen
        name='ElectricCar'
        component={ElectricCarScreen}
        options={{
          headerTitle: 'Xe điện',
        }}
      />
      <Stack.Screen
        name='Food'
        component={FoodScreen}
        options={{
          headerTitle: 'Đồ ăn',
        }}
      />

      <Stack.Screen
        name='Audio'
        component={AudioScreen}
        options={{
          headerTitle: 'Adudio',
        }}
      />

      <Stack.Screen
        name='Tour'
        component={TourScreen}
        options={{
          headerTitle: 'Đặt tour',
        }}
      />

      <Stack.Screen
        name='Setting'
        component={SettingScreen}
        options={{
          headerTitle: 'Cài đặt',
        }}
      />

    </Stack.Navigator>
  );
};


export default ServiceNavigator;