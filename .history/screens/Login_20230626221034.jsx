import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Login({ navigation }) {
  const handleLogin = () => {
    // Logic for handling login
    // e.g., validating input, making API calls, etc.
    // Once the login is successful, you can navigate to another screen using "navigation.navigate('ScreenName')"
  };
  return (
    <View>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" secureTextEntry={true} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({});
