import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Article() {
  return (
    <View style={{ paddingHorizontal: 10, marginTop: StatusBar.currentHeight }}>
      <Text style={{ fontSize: 25 }}>Article</Text>
      <ImageBackground
        source={{
          uri: "https://via.placeholder.com/400x200",
          width: 400,
          height: 200,
        }}
        style={{ alignItems: "center", justifyContent: "center", height: 200 }}
      >
        <Button title={"action 1"} onPress={function () {}} />
      </ImageBackground>
      <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
      <Text>
        Aenean maximus ligula viverra mollis tempor. In lorem risus, sagittis ut
        ullamcorper at, fringilla in magna.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue
        ipsum elit, vel porta sem sodales in.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
