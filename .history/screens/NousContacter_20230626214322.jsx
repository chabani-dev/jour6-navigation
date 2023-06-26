import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NousContacter() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TextInput
        placeholder={"saisir le teste"}
        style={styles.input}
        value={recherche}
        onChangeText={function (texteSaisi) {
          setRecherche(texteSaisi);
        }}
      />
      <Button
        title={"go"}
        onPress={function () {
          setUpdate(function (update) {
            return !update;
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
