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

const CreateUsername = ({ navigation }) => {
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
            Create Username
          </Text>
        </View>
        <View style={{ height: layouts.window.height / 19 }} />
        <View style={{}}>
          <TextInput
            placeholder="Username"
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
          <Text style={{ marginHorizontal: 10, color: "red" }}>
            Username is not available
          </Text>
        </View>

        <View style={{ height: layouts.window.height / 7 }} />
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
              Signup{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CreateUsername;

const styles = StyleSheet.create({});
