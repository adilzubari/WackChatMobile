import { StyleSheet, Text, View } from "react-native";
import React from "react";
import layouts from "../../constants/layouts";
import colors from "../../constants/colors";
import BackNavigationTitle from "../../components/BackNavigation&Title";
import LoginTopTab from "../../Navigators/LoginTopTab";
const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: layouts.window.height / 30 }} />
      <View style={{ flex: 0.1 }}>
        <BackNavigationTitle
          title={"Login"}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: colors.light.white }}>
        <LoginTopTab />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.light.white,
    // backgroundColor: colors.light.text,
    // alignItems: "center",
  },
});
