import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BackNavigationTitle from "../../components/BackNavigation&Title";
import colors from "../../constants/colors";
import layouts from "../../constants/layouts";

const Birthday = ({ navigation }) => {
  return (
    <>
      <View style={{ height: layouts.window.height / 30 }} />
      <View style={{ backgroundColor: colors.light.white, flex: 1 }}>
        <BackNavigationTitle
          title={"Signup"}
          onPress={() => navigation.goBack()}
        />
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            When's Your Birthday?
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: colors.light.textInputColor,
              width: layouts.window.width / 1.5,
            }}
          >
            Your Birthday Won't Be Shown Publicly.
          </Text>
        </View>
        <View style={{ height: layouts.window.height / 44 }} />
        <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
          <View style={{ marginHorizontal: 3 }}>
            <Text style={{ color: colors.light.textInputColor }}>Month</Text>
            <TextInput
              style={{
                borderWidth: 1.5,
                borderColor: colors.light.textInputColor,
                width: layouts.window.width / 3.4,
                height: layouts.window.height / 14,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{ marginHorizontal: 3 }}>
            <Text style={{ color: colors.light.textInputColor }}>Day</Text>
            <TextInput
              style={{
                borderWidth: 1.5,
                borderColor: colors.light.textInputColor,
                width: layouts.window.width / 3.4,
                height: layouts.window.height / 14,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{ marginHorizontal: 3 }}>
            <Text style={{ color: colors.light.textInputColor }}>Year</Text>
            <TextInput
              style={{
                borderWidth: 1.5,
                borderColor: colors.light.textInputColor,
                width: layouts.window.width / 3.4,
                height: layouts.window.height / 14,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
        <View style={{ height: layouts.window.height / 2 }} />

        <View style={{ justifyContent: "center", alignItems: "center" }}>
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
    </>
  );
};

export default Birthday;

const styles = StyleSheet.create({});
