import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { 
  Onboarding, 
  Getstarted,
  Login,
  ForgotPassword, 
  OtpVerification,
  ConfirmNewPassword,


} from "../Screens";
const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OtpVerification">
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
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="OtpVerification"
          component={OtpVerification}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="ConfirmNewPassword"
          component={ConfirmNewPassword}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
