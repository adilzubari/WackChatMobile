import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackNavigationTitle from "../../components/BackNavigation&Title";
import colors from "../../constants/colors";
import SignupTopTab from "../../Navigators/SignupTopTab";
import layouts from "../../constants/layouts";

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: layouts.window.height / 30 }} />
      <View style={{ flex: 0.1 }}>
        <BackNavigationTitle
          title={"Signup"}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: colors.light.white }}>
        <SignupTopTab />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.light.white,
    // backgroundColor: colors.light.text,
    // alignItems: "center",
  },
});
