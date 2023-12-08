import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View className="w-full items-center">
      <Image
        className="h-full"
        source={require("../images/welcome.jpg")}
      />
      <View className="absolute w-fit px-4 py-2 rounded-lg self-center top-[15%]">
        <View className='flex-col gap-80 items-center justify-center'>
          <Text className="text-3xl text-[#fca906] font-black mb-60">
            NINH BÌNH HERITAGE
          </Text>
          <TouchableOpacity
            className="w-5/12 items-center rounded-3xl p-2 bg-white"
            onPress={() => navigation.navigate('Main')}
          >
            <Text className="text-3xl font-bold text-[#124e07]">Bắt đầu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})