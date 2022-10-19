import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React from "react";
import layouts from "../../constants/layouts";
import colors from "../../constants/colors";

const LoginByEmail = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: colors.light.white,
        flex: 1,
      }}
    >
      <View style={{ height: layouts.window.height / 16 }} />
      <View>
        <TextInput
          placeholder="Enter Email Address"
          style={{
            width: layouts.window.width - 20,
            height: layouts.window.height / 11,
            margin: 10,
            padding: 10,
            borderRadius: 10,
            borderColor: colors.light.textInputColor,
            borderWidth: 1.9,
          }}
        />
      </View>
      <View>
        <TextInput
          placeholder="Password"
          style={{
            width: layouts.window.width - 20,
            height: layouts.window.height / 11,
            margin: 10,
            padding: 10,
            borderRadius: 10,
            borderColor: colors.light.textInputColor,
            borderWidth: 1.9,
          }}
        />
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text
            style={{
              textAlign: "justify",
              fontWeight: "bold",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: layouts.window.height / 6.6 }} />
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.light.greyColor,
            height: layouts.window.height / 16,
            width: layouts.window.width / 1.069,
            borderRadius: 10,
          }}
        >
          <Text style={{ alignSelf: "center", marginTop: 10, color: "grey" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginByEmail;

const styles = StyleSheet.create({});
