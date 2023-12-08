import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { tickets } from '../data/TicketData'


const TicketScreen = () => {
  return (
    <ScrollView className='pb-50'>
      {tickets.map((ticket) => {
        return (
          <View key={ticket.id} style={styles.container}>
            <Text style={styles.title}>{ticket.name}</Text>
            <Text>{ticket.cost}</Text>
          </View>
        )
      })}
    </ScrollView>
  )
}

export default TicketScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDF7E4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    minHeight: 50,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
  }
})