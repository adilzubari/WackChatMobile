import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./src/screens/StartScreen/StartScreen";
import IntrestScreen from "./src/screens/Intrest/IntrestScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SocialLogin from "./src/screens/SocialLogin/SocialLogin";
import Signup from "./src/screens/Signup/Signup";
import SignupTopTab from "./src/Navigators/SignupTopTab";
import PhoneVerification from "./src/screens/PhoneVerification/PhoneVerification";
import Birthday from "./src/screens/Birthday/Birthday";
import CreatePassword from "./src/screens/CreatePassword/CreatePassword";
import CreateUsername from "./src/screens/CreateUsername/CreateUsername";
import SocialSignup from "./src/screens/SocialSignup/SocialSignup";
import Login from "./src/screens/Login/Login";
import ForgotPassword from "./src/screens/ForgotPassword/ForgotPassword";
import LoginPhoneVerification from "./src/screens/LoginPhoneVerification/LoginPhoneVerification";
import CreateNewPassword from "./src/screens/CreateNewPassword/CreateNewPassword";

const RootStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Intrest"
          component={IntrestScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="SocialLogin"
          component={SocialLogin}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="PhoneVerification"
          component={PhoneVerification}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="LoginPhoneVerification"
          component={LoginPhoneVerification}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="SignupEmailPhone"
          component={SignupTopTab}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Birthday"
          component={Birthday}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="CreatePassword"
          component={CreatePassword}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="CreateNewPassword"
          component={CreateNewPassword}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="CreateUsername"
          component={CreateUsername}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="SocialSignup"
          component={SocialSignup}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
