import { SafeAreaView } from "react-native";
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const MapScreen = () => {
  return (
    <SafeAreaView className="w-full flex-1 pt-6">
      <WebView
        source={{ uri: 'https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN&entry=ttu' }}
      />
    </SafeAreaView>
  )
}

export default MapScreen;