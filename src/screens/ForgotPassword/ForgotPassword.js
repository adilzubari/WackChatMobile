import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import BackNavigationTitle from "../../components/BackNavigation&Title";
import colors from "../../constants/colors";
import layouts from "../../constants/layouts";
import { FontAwesome } from "@expo/vector-icons";

const ForgotPassword = ({ navigation }) => {
  return (
    <>
      <View style={{ height: layouts.window.height / 44 }} />
      <View
        style={{
          backgroundColor: colors.light.white,
          flex: 1,
          marginTop: StatusBar.currentHeight - 15,
        }}
      >
        <BackNavigationTitle
          title={"Reset"}
          onPress={() => navigation.goBack()}
        />
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Forgot Password?
          </Text>
          <Text style={{ fontSize: 13, color: colors.light.textInputColor }}>
            We Will Email You Code To Reset Password
          </Text>
        </View>
        <View style={{ height: layouts.window.height / 19 }} />
        <View style={{}}>
          <TextInput
            placeholder="Email Address"
            style={{
              width: layouts.window.width - 20,
              height: layouts.window.height / 10,
              margin: 10,
              padding: 10,
              borderRadius: 10,
              borderColor: colors.light.textInputColor,
              borderWidth: 1.9,
            }}
          />
        </View>

        <View style={{ height: layouts.window.height / 7 }} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateNewPassword")}
            style={{
              backgroundColor: colors.light.backgroundColor,
              height: layouts.window.height / 16,
              width: layouts.window.width - 20,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                marginTop: 10,
                color: colors.light.white,
              }}
            >
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
