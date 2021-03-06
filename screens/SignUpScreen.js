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
  Alert,
} from "react-native";
import { AppLoading } from "expo";
import data from "../fakedata/homebookflatitem";
import fakecategories from "../fakedata/fakecategories";
import * as Font from "expo-font";
import HomeScreenBookFlatListItem from "../components/homescreen/HomeScreenBookFlatListItem";
import HomeScreenCategoryItem from "../components/homescreen/HomeScreenCategoryItem";
import SignUpButton from "../components/sharedcomponents/SignUpButton";
import { signup } from "../store/actions/auth";

import { useDispatch } from "react-redux";
import * as autActions from "../store/actions/auth";

const SignUpScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [retypedPassWord, setRetypedPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  let signupHandler = () => {
    console.log(email);
    console.log(passWord);
    fetch("http://192.168.1.10:3000/api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.parse({
        email: '17520877@gm.uit.edu.vn',
        password: '123',
        profile:{
          firstName: name,
          phoneNumber:phoneNumber
        }
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      //Alert.alert("my json" + responseJson.movies);
      Alert.alert(
        "Get response",
        "Movies query-> " + JSON.stringify(responseJson.movies)
      );
    })
    .catch((error) => {
      console.error(error);
    })
    /*fetch("https://facebook.github.io/react-native/movies.json")
      .then((response) => response.json())
      .then((responseJson) => {
        //Alert.alert("my json" + responseJson.movies);
        Alert.alert(
          "Get response",
          "Movies query-> " + JSON.stringify(responseJson.movies)
        );
      })
      .catch((error) => {
        console.error(error);
      });*/
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.signUpTitle}>SIGN UP</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>E-mail:</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Password:</Text>
            <TextInput
              value={passWord}
              onChangeText={(text) => setPassword(text)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Retyped Password:</Text>
            <TextInput
              value={retypedPassWord}
              onChangeText={(text) => setRetypedPassword(text)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Name:</Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Phone Number:</Text>
            <TextInput
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              style={styles.textInput}
            />
          </View>
          <SignUpButton onPress={signupHandler} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    height: 620,
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 40,
    borderWidth: 1,
  },
  signUpTitle: {
    marginVertical: 50,
    marginLeft: 110,
    fontSize: 35,
    fontFamily: "IndieFlower-Regular",
  },
  container: {
    height: "100%",
  },
  infoContainer: {
    flexDirection: "row",
    marginLeft: 20,
    marginVertical: 15,
    alignItems: "center",
  },
  title: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 15,
  },
  textInput: {
    marginLeft: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: "55%",
    height: 40,
    borderWidth: 1,
    paddingLeft: 5,
  },
});
export default SignUpScreen;
