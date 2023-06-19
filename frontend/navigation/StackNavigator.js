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
  Pharmacy,
  Hmedix,
  HmedixPage,
  Productmalaria,
  Productpalaxin,
  Categories,
  Antimalaria,
  Editprofile,
  Productdetail,
  PaymentPage,
  Scan,
  QRScanner,
} from "../Screens";

import { TabsNavigator } from "./TabsNavigator";
const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Scan">
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

        <Stack.Screen
          name="Pharmacy"
          component={Pharmacy}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Hmedix"
          component={Hmedix}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HmedixPage"
          component={HmedixPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Antimalaria"
          component={Antimalaria}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Productmalaria"
          component={Productmalaria}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Productpalaxin"
          component={Productpalaxin}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Productdetail"
          component={Productdetail}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Editprofile"
          component={Editprofile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PaymentPage"
          component={PaymentPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="QRScanner"
          component={QRScanner}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
