import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import colors from "../../constants/colors";
import layouts from "../../constants/layouts";

const SignupByPhone = ({ navigation }) => {
  const [value, setValue] = useState("");
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: colors.light.white,
        flex: 1,
      }}
    >
      <View
        style={{
          height: layouts.window.height / 14,
          backgroundColor: colors.light.white,
        }}
      />
      <View
        style={{
          borderWidth: 1.9,
          borderColor: colors.light.textInputColor,
          width: "90.8%",
          backgroundColor: colors.light.white,
          // justifyContent: "center",
          // alignItems: "center",
          margin: 5,
          padding: 5,
          borderRadius: 10,
        }}
      >
        <PhoneInput
          textContainerStyle={{ backgroundColor: "white" }}
          layout="first"
          defaultValue={value}
          defaultCode="PK"
          placeholder="(123) 456 789"
          onChangeText={(text) => {
            setValue(text);
          }}
          autoFocus
        />
      </View>
      <View style={{ height: layouts.window.height / 29 }} />
      <View
        style={{
          width: layouts.window.width,
          height: layouts.window.height / 10,
          // borderWidth: 1,
          // borderColor: "black",
          // flexDirection: "row",
          // alignItems: "center",
        }}
      >
        <Text
          // numberOfLines={2}
          style={{
            fontSize: 13,
            textAlign: "justify",
            alignSelf: "center",
            color: colors.light.backgroundColor,
          }}
        >
          By signing up you've agreed to Our Terms of use and Privacy Notice
        </Text>
        {/* <Text
          numberOfLines={2}
          style={{
            textAlign: "justify",
            fontSize: 13,
            color: colors.light.backgroundColor,
          }}
        >
          Our Terms of Use and Privacy Notice
        </Text> */}
      </View>
      <View style={{ height: layouts.window.height / 2.58 }} />
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("PhoneVerification")}
          style={{
            backgroundColor: colors.light.greyColor,
            height: layouts.window.height / 16,
            width: layouts.window.width / 1.19,
            borderRadius: 10,
          }}
        >
          <Text style={{ alignSelf: "center", marginTop: 10, color: "grey" }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupByPhone;

const styles = StyleSheet.create({});
