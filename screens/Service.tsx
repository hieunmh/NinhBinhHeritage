import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ServiceScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dịch vụ</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <Fontisto name="ticket" size={24} color="black" />
          <Text>Vé điện tử</Text>
        </View>
        <View style={styles.item}>
          <MaterialIcons name="electric-car" size={24} color="black" />
          <Text>Xe điện</Text>
        </View>
        <View style={styles.item}>
          <MaterialCommunityIcons name="food-turkey" size={24} color="black" />
          <Text>Đồ ăn</Text>
        </View>
        <View style={styles.item}>
          <FontAwesome name="headphones" size={24} color="black" />
          <Text>Hướng dẫn Audio</Text>
        </View>
        <View style={styles.item}>
          <MaterialCommunityIcons name="transit-detour" size={24} color="black" />
          <Text>Tour</Text>
        </View>
        <View style={styles.item}>
          <Entypo name="camera" size={24} color="black" />
          <Text>Chụp ảnh</Text>
        </View>
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

export default ServiceScreen;