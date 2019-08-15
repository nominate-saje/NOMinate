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
import UserHomePage from './UserHomePage'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'



const App = createSwitchNavigator({
  SignInForm,
  SignUpForm,
  UserHomePage
},
{
  initialRouteName: 'SignInForm'
}
)

export default createAppContainer(App)


