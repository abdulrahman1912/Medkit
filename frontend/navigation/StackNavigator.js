import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Onboarding,
  Getstarted,
  Login,
  ForgotPassword,
  OtpVerification,
  ConfirmNewPassword,
  Register,
  Fillprofile,
} from "../Screens";

import { TabsNavigator } from './TabsNavigator';
const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ForgotPassword">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Getstarted"
          component={Getstarted}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmNewPassword"
          component={ConfirmNewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FillProfile"
          component={Fillprofile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Tabs"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
