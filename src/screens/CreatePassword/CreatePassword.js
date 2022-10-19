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
import { FontAwesome } from "@expo/vector-icons";

const CreatePassword = ({ navigation }) => {
  return (
    <>
      <View style={{ height: layouts.window.height / 44 }} />
      <View style={{ backgroundColor: colors.light.white, flex: 1 }}>
        <BackNavigationTitle
          title={"Signup"}
          onPress={() => navigation.goBack()}
        />
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Create Password
          </Text>
        </View>
        <View style={{ height: layouts.window.height / 19 }} />
        <View>
          <TextInput
            placeholder="Enter Password"
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
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: "bold" }}>
            Your password must be at least:
          </Text>
        </View>
        <View style={{ height: layouts.window.height / 52 }} />
        <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
          <FontAwesome name="circle-thin" size={24} />
          <Text style={{ marginLeft: 10 }}>8 characters (20 max)</Text>
        </View>
        <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
          <FontAwesome name="circle-thin" size={24} />
          <Text style={{ marginLeft: 10 }}>1 letter and 1 number</Text>
        </View>
        <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
          <FontAwesome name="circle-thin" size={24} />
          <Text style={{ marginLeft: 10 }}>
            1 special character (Example: # ? ! $ & @)
          </Text>
        </View>
        <View style={{ height: layouts.window.height / 17 }} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateUsername")}
            style={{
              backgroundColor: colors.light.greyColor,
              height: layouts.window.height / 16,
              width: layouts.window.width - 20,
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

export default CreatePassword;

const styles = StyleSheet.create({});
