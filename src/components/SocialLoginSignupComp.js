import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import layouts from "../constants/layouts";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Button, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../constants/colors";

const SocialLoginSignupComp = ({
  navigation,
  onPress,
  title1,
  heading,
  signupOrLogin,
  onPressSignupOrLogin,
  SignupLoginusernameonPress,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.container}>
        <View style={{ height: layouts.window.height / 11 }} />
        <View>
          <Image
            source={require("../../assets/Vector.png")}
            style={{
              width: layouts.window.width / 8,
              height: layouts.window.height / 14,
            }}
          />
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>WackChat</Text>
        </View>
        <View style={{ height: layouts.window.height / 22 }} />
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            {heading} to WackChat
          </Text>
        </View>
        <View style={{ height: layouts.window.height / 70 }} />
        <View style={Styles.leftContent}>
          <TouchableOpacity style={{ marginRight: 5 }}>
            <Ionicons
              name="person-circle-outline"
              size={35}
              color={"#D91F2A"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={SignupLoginusernameonPress}
            style={{
              backgroundColor: colors.light.white,
              width: layouts.window.width / 1.27,
              height: layouts.window.height / 17,
              borderRadius: 19,
              elevation: 5,
              // marginLeft: -8,
            }}
          >
            <Text style={Styles.heading}>Username/Email/Phone</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.leftContent}>
          <TouchableOpacity style={{ marginRight: 5 }}>
            <Image
              source={require("../../assets/fb.png")}
              style={{
                // marginLeft: -18,
                height: layouts.window.height / 15,
                width: layouts.window.width / 8,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.light.white,
              width: layouts.window.width / 1.27,
              height: layouts.window.height / 17,
              borderRadius: 19,
              elevation: 5,
              // marginLeft: -8,
            }}
          >
            <Text style={Styles.heading}>{title1} with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.leftContent}>
          <TouchableOpacity style={{ marginRight: 5 }}>
            <Image
              source={require("../../assets/google.png")}
              style={{
                // marginLeft: -18,
                height: layouts.window.height / 15,
                width: layouts.window.width / 8,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.light.white,
              width: layouts.window.width / 1.27,
              height: layouts.window.height / 17,
              borderRadius: 19,
              elevation: 5,
              // marginLeft: -8,
            }}
          >
            <Text style={Styles.heading}>{title1} with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.leftContent}>
          <TouchableOpacity style={{ marginRight: 5 }}>
            <Image
              source={require("../../assets/twitter.png")}
              style={{
                height: layouts.window.height / 15,
                width: layouts.window.width / 8,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.light.white,
              width: layouts.window.width / 1.27,
              height: layouts.window.height / 17,
              borderRadius: 19,
              elevation: 5,
              // marginLeft: -8,
            }}
          >
            <Text style={Styles.heading}>{title1} with Twitter</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.leftContent}>
          <TouchableOpacity style={{ marginRight: 5 }}>
            <Image
              source={require("../../assets/apple.png")}
              style={{
                // marginLeft: -18,
                height: layouts.window.height / 15,
                width: layouts.window.width / 8,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.light.white,
              width: layouts.window.width / 1.27,
              height: layouts.window.height / 17,
              borderRadius: 19,
              elevation: 5,
              // marginLeft: -8,
            }}
          >
            <Text style={Styles.heading}>{title1} with Apple</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.leftContent}>
          <TouchableOpacity style={{ marginRight: 5 }}>
            <Image
              source={require("../../assets/insta.png")}
              style={{
                // marginLeft: -18,
                height: layouts.window.height / 15,
                width: layouts.window.width / 8,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.light.white,
              width: layouts.window.width / 1.27,
              height: layouts.window.height / 17,
              borderRadius: 19,
              elevation: 5,
              // marginLeft: -8,
            }}
          >
            <Text style={Styles.heading}>{title1} with Instagram</Text>
          </TouchableOpacity>
        </View>
        {/* For extra
      spacing */}
        <View style={{ height: layouts.window.height / 14 }} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: layouts.window.width / 1.3,
          }}
        >
          <Text
            numberOfLines={3}
            style={{
              alignSelf: "center",
              textAlign: "center",
              letterSpacing: 0.12,
              fontSize: 14,
              color: colors.light.backgroundColor,
              fontWeight: "bold",
            }}
          >
            If you Continue, You Agree to Wackchat's Terms of Service and
            Confirm That You Have Read Wackchat's Privacy Policy.
          </Text>
        </View>
        <View style={{ height: layouts.window.height / 14 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "700" }}>Don't have an account? </Text>
          <TouchableOpacity onPress={onPressSignupOrLogin}>
            <Text
              style={{
                fontWeight: "bold",
                color: colors.light.backgroundColor,
              }}
            >
              {signupOrLogin}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: layouts.window.height / 19 }} />
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: colors.light.text,
    alignItems: "center",
  },
  header: {
    // paddingHorizontal: 10,
    // paddingVertical: 20,
    // flexDirection: "row",
    // // alignItems: "center",
    // // justifyContent: "space-between",
    // position: "absolute",
    // backgroundColor: "white",
    // width: "100%",
    // top: 20,
    // // zIndex: 10,
    // // backgroundColor: 'red'
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  heading: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
});
export default SocialLoginSignupComp;
