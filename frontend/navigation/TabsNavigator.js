import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home, Location, Favourites, Cart, Profile } from "../Screens";
import { Text, StyleSheet, Platform } from "react-native";

import Homeicon from "../assets/icons/home.svg";
import HomeActive from "../assets/icons/homeactive.svg";
import Locationicon from "../assets/icons/location.svg";
import LocationActive from "../assets/icons/locationactive.svg";
import FavouritesActive from "../assets/icons/favoritesactive.svg";
import Favouritesicon from "../assets/icons/favourites.svg";
import Carticon from "../assets/icons/cart.svg";
import CartActive from "../assets/icons/cartactive.svg";
import Profileicon from "../assets/icons/profile.svg";
import ProfileActive from "../assets/icons/profileactive.svg";

const Tabs = createMaterialBottomTabNavigator();

export const TabsNavigator = () => {
  const styles = StyleSheet.create({
    label: {
      color: "#000000B8",
      fontSize: 11,
    },
  });

  return (
    <Tabs.Navigator
      shifting={true}
      initialRouteName="Home"
      activeColor={"#000000B8"}
      inactiveColor={"#FFFFFF"}
      barStyle={{
        backgroundColor: "#91A0F680",
        height: 80,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: <Text style={styles.label}>Home</Text>,
          tabBarIcon: ({ color, focused }) =>
            focused ? <HomeActive /> : <Homeicon fill={color} />,
        }}
      />

      <Tabs.Screen
        name="Location"
        component={Location}
        options={{
          tabBarLabel: <Text style={styles.label}>Location</Text>,
          tabBarIcon: ({ color, focused }) =>
            focused ? <LocationActive /> : <Locationicon fill={color} />,
        }}
      />

      <Tabs.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: <Text style={styles.label}>Favourites</Text>,
          tabBarIcon: ({ color, focused }) =>
            focused ? <FavouritesActive /> : <Favouritesicon fill={color} />,
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: <Text style={styles.label}>Cart</Text>,
          tabBarIcon: ({ color, focused }) =>
            focused ? <CartActive /> : <Carticon fill={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: <Text style={styles.label}>Profile</Text>,
          tabBarIcon: ({ color, focused }) =>
            focused ? <ProfileActive /> : <Profileicon fill={color} />,
        }}
      />
    </Tabs.Navigator>
  );
};
