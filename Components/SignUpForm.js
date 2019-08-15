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
  Button,
  DatePickerIOS
} from "react-native";
import {db} from '../firebase.js'




class SignUpForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      email: "",
      password: "",
      birthday: ""
    };
   
    
  }

  test = () => {
    db.ref('/test').push({'test2':'test2'})
  }

  

  

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.WelcomeText}>Please fill out:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="first name"
          onChangeText={(firstName) => this.setState({ firstName })}
          value={this.state.firstName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          style={styles.textInput}
          placeholder="MM/DD/YY"
          onChangeText={(birthday) => this.setState({ birthday })}
          value={this.state.birthday}
        />
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={0.3}
          onPress={() => this.test()}
        >
          <Text style={styles.TextStyle}>Submit</Text>
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
    fontSize: 15
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
    fontSize: 18,
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'white',
    height: 50,
    justifyContent: "center",
    marginBottom: 15,
    marginLeft: 30,
    marginRight: 30
  
  }
});

export default SignUpForm;