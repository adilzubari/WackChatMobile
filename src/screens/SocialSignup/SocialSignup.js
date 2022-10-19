import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SocialLoginSignupComp from "../../components/SocialLoginSignupComp";

const SocialSignup = ({ navigation }) => {
  return (
    <View>
      <SocialLoginSignupComp
        heading={"Signup"}
        title1={"Signup"}
        signupOrLogin={"Login"}
        onPressSignupOrLogin={() => navigation.navigate("SocialLogin")}
        SignupLoginusernameonPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

export default SocialSignup;

const styles = StyleSheet.create({});
