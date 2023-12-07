import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import ServiceItem from '../components/ServiceItem';

const ServiceScreen = () => {
  const listService = [
    {
      name: 'Vé điện tử',
      icon: () => <Fontisto name="ticket" size={24} color="black" />,
    },
    {
      name: 'Xe điện',
      icon: () => <MaterialIcons name="electric-car" size={24} color="black" />,
    },
    {
      name: 'Đồ ăn',
      icon: () => <MaterialCommunityIcons name="food-turkey" size={24} color="black" />,
    },
    {
      name: 'Hướng dẫn Audio',
      icon: () => <FontAwesome name="headphones" size={24} color="black" />,
    },
    {
      name: 'Tour',
      icon: () => <MaterialCommunityIcons name="transit-detour" size={24} color="black" />,
    },
    {
      name: 'Chụp ảnh',
      icon: () => <Entypo name="camera" size={24} color="black" />,
    }
  ]
  return (
    <SafeAreaView>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Dịch vụ</Text>
      </View> */}
      <View style={styles.container}>
        {listService.map((item, index) => {
          return <ServiceItem key={index} name={item.name} icon={item.icon} />
        })}
      </View>
    </SafeAreaView>
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