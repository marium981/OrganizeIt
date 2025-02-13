import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F5F5F5',
    primary: "#00A8CC",
    secondary: "#CBC3E3"
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <HomeScreen/>
    </NavigationContainer>
  );
}

