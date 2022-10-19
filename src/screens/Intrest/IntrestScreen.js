import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { ChooseIntrests } from "../../variables/general";
import colors from "../../constants/colors";
import React from "react";
const { width, height } = Dimensions.get("window");
const IntrestScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={{ padding: 10 }}>
      <View style={{ height: height / 10 }} />
      <View style={{}}>
        <Text style={{ fontWeight: "700", fontSize: 25 }}>CHOOSE YOUR</Text>
        <Text style={{ fontWeight: "700", fontSize: 25 }}>INTERESTS</Text>
      </View>
      <View style={{ marginTop: 0 }}>
        <Text style={{ color: "#999999", fontSize: 16 }}>
          To serve you better pick
        </Text>
        <Text style={{ color: "#999999", fontSize: 16 }}>
          what interest you
        </Text>
      </View>
      <View style={styles.titleView}>
        <FlatList
          data={ChooseIntrests}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={4}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SocialLogin")}
          style={{
            backgroundColor: colors.light.backgroundColor,
            height: height / 14,
            width: width / 1.2,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              marginTop: 10,
              fontSize: 16,
              color: colors.light.text,
              fontWeight: "bold",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntrestScreen;

const styles = StyleSheet.create({
  itemTitle: {
    backgroundColor: colors.light.greyColor,
    padding: 9,
    margin: 7,
    borderRadius: 19,
    textAlign: "center",
    color: colors.light.blackTextColor,
    fontWeight: "600",
  },
  titleView: {
    marginTop: 10,
    // borderWidth: 2, borderColor: 'red',
    flexWrap: "nowrap",
    height: width / 1.01,
    width: "100%",
    // justifyContent:'space-around',
    alignItems: "center",
    alignSelf: "center",
  },
});
