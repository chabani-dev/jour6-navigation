import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Login({ navigation }) {
  const handleLogin = () => {};
  return (
    <View>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" secureTextEntry={true} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({});
