import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import layouts from "../constants/layouts";
import colors from "../constants/colors";
import LoginByPhone from "../screens/LoginByPhoneOrEmail/LoginByPhone";
import LoginByEmail from "../screens/LoginByPhoneOrEmail/LoginByEmail";

const Tab = createMaterialTopTabNavigator();

const LoginTopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIndicatorContainerStyle: {
            width: "auto",
            // marginHorizontal: layouts.window.width / 18,
            //   backgroundColor: '#ECA438',
          },
          // tabBarContentContainerStyle: {
          //   width: width * 1.39,
          // },
          tabBarItemStyle: {
            width: "auto",
            minWidth: layouts.window.width / 2,
          },
          tabBarStyle: {
            backgroundColor: colors.light.white,
            height: layouts.window.height / 17,
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.light.backgroundColor,
            width: "0.25%",
            // left: '3%',
          },
          tabBarActiveTintColor: colors.light.blackTextColor,
          tabBarInactiveTintColor: colors.light.blackTextColor,
        })}
      >
        <Tab.Screen
          name="LoginPhone"
          component={LoginByPhone}
          options={{
            headerShown: false,
            tabBarLabel: "Phone",
          }}
        />
        <Tab.Screen
          name="LoginEmail"
          component={LoginByEmail}
          options={{
            headerShown: false,
            tabBarLabel: "Email",
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default LoginTopTab;

const styles = StyleSheet.create({});
