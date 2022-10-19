import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SocialLoginSignupComp from "../../components/SocialLoginSignupComp";

const SocialLogin = ({ navigation }) => {
  return (
    <View>
      <SocialLoginSignupComp
        heading={"Login"}
        title1={"Login"}
        signupOrLogin={"Sign Up"}
        onPressSignupOrLogin={() => navigation.navigate("SocialSignup")}
        SignupLoginusernameonPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({});
