import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

/*const fetchFonts = () => {
  return Font.loadAsync({
    
  });
};*/

const HomeScreenCategoryItem = props => {
  /*const [fontLoaded, setFontLoaded] = useState(false);
  if(!fontLoaded){
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }*/

  return (
    <TouchableOpacity style={styles.TouchableOpacity}>
      <View style={styles.container}>
        <Image
          source={{
            uri: props.source,
          }}
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TouchableOpacity: {
    width: 170,
    height: 300,
    marginLeft: 15,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    shadowColor: "#989898",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: "#d3d3d3",
  },
  itemImage: {
    height: "70%",
    width: "100%",
    borderRadius: 20,
  },
  itemTitle: {
    fontSize: 20,
    textAlign:"center",
    marginTop:20
  },
});
export default HomeScreenCategoryItem;