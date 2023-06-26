import { StyleSheet, TextInput, Button, View } from "react-native";
import React from "react";

export default function NousContacter() {
  return (
    <View>
      <Text>Formulaire </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          placeholder={"saisir le nom d'cocktail"}
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
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 4,
    borderRadius: 5,
    marginBottom: 10,
  },
  boxShadow: {
    shadowColor: "red",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});
