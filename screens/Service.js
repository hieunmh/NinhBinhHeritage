import { SafeAreaView } from "react-native";
import { Text, View } from 'react-native';

export default ServiceScreen = () => {
  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-4xl text-[#0B646B] font-bold">Dich Vu</Text>
          <Text className="text-[#527283] text-3xl">Service screen</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}