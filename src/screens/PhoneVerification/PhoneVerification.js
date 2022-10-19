import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import BackNavigationTitle from "../../components/BackNavigation&Title";
import colors from "../../constants/colors";
import layouts from "../../constants/layouts";

const PhoneVerification = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          height: layouts.window.height / 44,
          backgroundColor: colors.light.white,
        }}
      />
      <View
        style={{
          backgroundColor: colors.light.white,
          flex: 1,
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <BackNavigationTitle
          title={"Verification"}
          onPress={() => navigation.goBack()}
        />

        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Enter 6 digit code
          </Text>
          <Text style={{ color: colors.light.textInputColor }}>
            Your code was sent to 03xxxxxxxxx
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            placeholder="Enter Code"
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
        <View style={{ margin: 10, justifyContent: "center" }}>
          <TouchableOpacity>
            <Text>Resend Code</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: layouts.window.height / 2.2 }} />

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Birthday")}
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
    </>
  );
};

export default PhoneVerification;

const styles = StyleSheet.create({});
