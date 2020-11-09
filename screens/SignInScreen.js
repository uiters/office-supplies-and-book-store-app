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
} from "react-native";
import { AppLoading } from "expo";
import data from "../fakedata/homebookflatitem";
import fakecategories from "../fakedata/fakecategories";
import * as Font from "expo-font";
import HomeScreenBookFlatListItem from "../components/homescreen/HomeScreenBookFlatListItem";
import HomeScreenCategoryItem from "../components/homescreen/HomeScreenCategoryItem";
import SignInButton from "../components/sharedcomponents/SignInButton";
import ForgotPassword from "../components/sharedcomponents/ForgotPassWordButton";
import { connect, useDispatch } from "react-redux";
import { signInRequest } from "../redux/actions/index";
import { compose } from "redux";


const SignInScreen = ({ route, navigation},props) => {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");

  const dispatch = useDispatch();
  const onSignIn = () => {
    dispatch(signInRequest({email, password:passWord}));
  };
  const onForgotPassword = () => {};
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.signUpTitle}>SIGN IN</Text>
          <View style={styles.infoContainer}>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.textInput}
              placeholder="Email*"
            />
          </View>
          <View style={styles.infoContainer}>
            <TextInput
              value={passWord}
              onChangeText={(text) => setPassword(text)}
              style={styles.textInput}
              placeholder="Password*"
            />
          </View>
          <SignInButton onPress={onSignIn} />
          <ForgotPassword onPress={onForgotPassword} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    height: 550,
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
    width: "90%",
    height: 40,
    borderWidth: 1,
    paddingLeft: 5,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => {
      console.log("hello");
      dispatch(signInRequest(user));
    },
  };
};

export default connect(null,mapDispatchToProps)(SignInScreen);