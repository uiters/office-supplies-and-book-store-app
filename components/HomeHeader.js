import * as React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import DrawerButton from "./DrawerButton";
import ShoppingCartButton from "./ShoppingCartButton";

const HomeHeader = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri:
          "https://nongsansay.vn/wp-content/uploads/2020/04/5120x2880-light-green-solid-color-background-scaled.jpg",
      }}
      style={styles.ImageBackground}
    >
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <DrawerButton onOpenDrawer={() => navigation.openDrawer()} />
          <Text style={styles.TextTitle}>Home</Text>
          <ShoppingCartButton />
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  ImageBackground: {
    width: "100%",
    height: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  container: {
    height: 150,
    paddingTop: 50,
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TextTitle: {
    color:"white",
    fontSize: 23,
  },
});
export default HomeHeader;