import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Button,
  StatusBar as S,
} from "react-native";

export default function Article() {
  const articles = [
    {
      title: "Article 1",
      imageUri: "https://via.placeholder.com/400x200",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      title: "Article 2",
      imageUri: "https://via.placeholder.com/400x200",
      content:
        "Aenean maximus ligula viverra mollis tempor. In lorem risus, sagittis ut ullamcorper at, fringilla in magna.",
    },
    {
      title: "Article 3",
      imageUri: "https://via.placeholder.com/400x200",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue ipsum elit, vel porta sem sodales in.",
    },
  ];

  return (
    <View style={{ paddingHorizontal: 10, marginTop: S.currentHeight }}>
      {articles.map((item, key) => (
        <View key={key}>
          <Text style={{ fontSize: 25 }}>{item.title}</Text>
          <ImageBackground
            source={{
              uri: item.imageUri,
              width: 400,
              height: 200,
            }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 200,
            }}
          >
            <Button title={"Action 1"} onPress={() => {}} />
          </ImageBackground>
          <Text>{item.content}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
