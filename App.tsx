import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './navigation/BottomNavigator';
import WelcomeScreen from './screens/Welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}

        />
        <Stack.Screen name="Main" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}