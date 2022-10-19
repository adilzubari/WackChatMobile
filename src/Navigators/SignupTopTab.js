import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignupByPhone from "../screens/SignupByPhoneOrEmail/SignupByPhone";
import SignupByEmail from "../screens/SignupByPhoneOrEmail/SignupByEmail";
import layouts from "../constants/layouts";
import colors from "../constants/colors";

const Tab = createMaterialTopTabNavigator();

const SignupTopTab = () => {
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
          name="SignupPhone"
          component={SignupByPhone}
          options={{
            headerShown: false,
            tabBarLabel: "Phone",
          }}
        />
        <Tab.Screen
          name="SignupEmail"
          component={SignupByEmail}
          options={{
            headerShown: false,
            tabBarLabel: "Email",
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default SignupTopTab;

const styles = StyleSheet.create({});
