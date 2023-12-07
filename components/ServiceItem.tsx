import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';

export default function ServiceItem(props: any) {
  const onPress = () => {
    alert(props.name)
  }

  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      {props.icon()}
      <Text>{props.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 100,
    flexBasis: '33.333%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

