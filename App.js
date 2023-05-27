import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from './frontend/navigation/StackNavigator'
import Toast from "react-native-toast-message";
import { Provider as JotaiProvider } from 'jotai';


export default function App() {
  return (
    <>
    <JotaiProvider>
     <StackNavigator/>
     <Toast/>
     </JotaiProvider>
    </>
   
    
  );
}

