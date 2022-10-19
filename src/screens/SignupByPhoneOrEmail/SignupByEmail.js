import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StatusBar,
} from "react-native";
import React from "react";
import layouts from "../../constants/layouts";
import colors from "../../constants/colors";

const SignupByEmail = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
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
            height: layouts.window.height / 10,
            margin: 10,
            padding: 10,
            borderRadius: 10,
            borderColor: colors.light.textInputColor,
            borderWidth: 1.9,
          }}
        />
      </View>
      <View style={{ height: layouts.window.height / 33 }} />

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
      <View style={{ height: layouts.window.height / 2.6 }} />

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreatePassword")}
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

export default SignupByEmail;

const styles = StyleSheet.create({});
