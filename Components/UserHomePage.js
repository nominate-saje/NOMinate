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


class UserHomePage extends Component {
    render() {
        return (
          <View style={styles.MainContainer}>
            <Text >Welcome to the home page!</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

module.exports = UserHomePage;