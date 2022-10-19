import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { StyleSheet, View, TouchableOpacity, StatusBar } from "react-native";
import { Button, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import layouts from "../constants/layouts";
import colors from "../constants/colors";

const BackNavigationTitle = ({ navigation, onPress, title }) => {
  return (
    <View style={Styles.header}>
      <View style={Styles.leftContent}>
        <TouchableOpacity
          onPress={onPress}
          style={{ position: "absolute", left: 10 }}
        >
          <AntDesign
            name="arrowleft"
            size={30}
            color={colors.light.backarrow}
          />
        </TouchableOpacity>
        <Text style={Styles.heading}>{title}</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight - 25,
    // paddingVertical: 10,
    backgroundColor: "white",
    width: "100%",
  },
  leftContent: {
    flexDirection: "row",
    height: layouts.window.height / 11,
    alignItems: "center",
  },

  heading: {
    fontSize: 18,
    position: "absolute",
    left: 100,
    marginLeft: 45,
    fontWeight: "bold",
  },
});
export default BackNavigationTitle;
