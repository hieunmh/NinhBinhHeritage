import { SafeAreaView } from "react-native";
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default MapScreen = () => {
  return (
    <View className="flex-1 bg-white relative pt-8">
      <WebView
        source={{ uri: 'https://www.openstreetmap.org/#map=19/21.03817/105.78329' }}
      />
    </View>
  )
}