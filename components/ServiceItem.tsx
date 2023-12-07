import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';

export default function ServiceItem(props: any) {

  return (
    <TouchableOpacity style={styles.item} onPress={props.onPress}>
      <View style={styles.containerIcon}>
        {props.icon()}
      </View>
      <Text>{props.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#33EEFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,

  },
  item: {
    height: 100,
    flexBasis: '33.333%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})