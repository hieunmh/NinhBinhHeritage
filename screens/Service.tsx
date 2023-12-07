import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import ServiceItem from '../components/ServiceItem';

export type ServiceStackParamList = {
  Ticket: undefined;
};

const ServiceScreen = ({ navigation }: any) => {
  const listService = [
    {
      name: 'Vé điện tử',
      icon: () => <Fontisto name="ticket" size={24} color="black" />,
      router: 'Ticket'
    },
    {
      name: 'Xe điện',
      icon: () => <MaterialIcons name="electric-car" size={24} color="black" />,
      router: 'ElectricCar'
    },
    {
      name: 'Đồ ăn',
      icon: () => <MaterialCommunityIcons name="food-turkey" size={24} color="black" />,
      router: 'Food'
    },
    {
      name: 'Hướng dẫn Audio',
      icon: () => <FontAwesome name="headphones" size={24} color="black" />,
      router: 'Audio'
    },
    {
      name: 'Tour',
      icon: () => <MaterialCommunityIcons name="transit-detour" size={24} color="black" />,
      router: 'Tour'
    },
    {
      name: 'Chụp ảnh',
      icon: () => <Entypo name="camera" size={24} color="black" />,
      router: 'Camera'
    }
  ]

  return (
    <View className='flex-1 bg-white relative pt-5'>
      <View style={styles.container}>
        {listService.map((item, index) => {
          return <ServiceItem key={index} name={item.name} icon={item.icon} onPress={() => {
            navigation.navigate(item.router);
          }} />
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33EEFF'

  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
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

const onPress = () => {
  alert('Vé điện tử')
}

export default ServiceScreen;