import React, { Component } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
  Button
} from "react-native";
import UserHomePage from "./UserHomePage";
import SignUpForm from "./SignUpForm";

class SignInForm extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <KeyboardAvoidingView>
          <Text style={styles.WelcomeText}> Welcome!</Text>
          <TextInput
            type="email"
            style={styles.textInput}
            placeholder="email"
          />
          <TextInput style={styles.textInput} placeholder="password" />
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={0.3}
          onPress={() => this.setState({ isLoggedIn: true })}
        >
          <Text style={styles.TextStyle}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={0.3}
          onPress={() => this.props.navigation.navigate("SignUpForm")}
        >
          <Text style={styles.TextStyle}>Create An Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  WelcomeText: {
    color: "white",
    textAlign: "center",
    flexDirection: "column",
    fontSize: 50
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#6D54A9",
    flexDirection: "column"
  },

  SubmitButtonStyle: {
    height: 50,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },

  TextStyle: {
    color: "#fff",
    textAlign: "center"
  },
  textInput: {
    height: 40,
    fontSize: 20,
    width: "90%",
    borderColor: "#9b9b9b",
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15,
    justifyContent: "center",
    flexDirection: "column"
  }
});

export default SignInForm;
