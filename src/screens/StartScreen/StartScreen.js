import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  //   Button,
} from "react-native";
import React from "react";
import layouts from "../../constants/layouts";
import colors from "../../constants/colors";
// const { width, height } = Dimensions.get("window");
const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
      <Image
        source={require("../../../assets/img.jpg")}
        style={{
          width: layouts.window.width,
          height: layouts.window.height,
          borderRadius: 10,
        }}
      />
      <View style={{ position: "absolute", bottom: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Intrest")}
          style={{
            backgroundColor: colors.light.backgroundColor,
            width: layouts.window.width / 1.2,
            height: layouts.window.height / 15,
            borderRadius: 19,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 7,
              color: "white",
            }}
          >
            Lets Get Started
          </Text>
        </TouchableOpacity>
        {/* <Button>lets Get Started</Button> */}
      </View>
      {/* </View> */}
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
  },
});
