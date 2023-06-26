import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Login({ navigation }) {
  return (
    <View>
      <Text>Login {route.params.nom}</Text>
      <Button
        title={"voir les mentions légales"}
        onPress={function () {
          navigation.navigate("mention-legale");
        }}
        color={"green"}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
