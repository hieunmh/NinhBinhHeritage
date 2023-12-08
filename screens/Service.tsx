import { View, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import ServiceItem from '../components/ServiceItem';
import { Colors } from '../constants/Colors';

export type ServiceStackParamList = {
  Ticket: undefined;
};

const ServiceScreen = ({ navigation }: any) => {
  const theme = { mode: "dark" };
  let activeColors = Colors[theme.mode as keyof typeof Colors];

  return (
    <View className='flex-1 bg-white relative pt-5'>
      <View style={styles.container}>
        {listService.map((item, index) => {
          return <ServiceItem key={index} name={item.name} icon={item.icon} onPress={() => {
            navigation.push(item.router);
          }} />
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  item: {
    height: 100,
    flexBasis: '33.333%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const listService = [
  {
    name: 'Vé điện tử',
    icon: () => <Fontisto name="ticket" size={27} color="white" />,
    router: 'Ticket'
  },
  {
    name: 'Xe điện',
    icon: () => <MaterialIcons name="electric-car" size={27} color="white" />,
    router: 'ElectricCar'
  },
  {
    name: 'Đồ ăn',
    icon: () => <MaterialCommunityIcons name="food-turkey" size={27} color="white" />,
    router: 'Food'
  },
  {
    name: 'Hướng dẫn Audio',
    icon: () => <FontAwesome name="headphones" size={27} color="white" />,
    router: 'Audio'
  },
  {
    name: 'Tour',
    icon: () => <MaterialCommunityIcons name="transit-detour" size={27} color="white" />,
    router: 'Tour'
  },
  {
    name: 'Chụp ảnh',
    icon: () => <Entypo name="camera" size={27} color="white" />,
    router: 'Camera'
  }
]

export default ServiceScreen;