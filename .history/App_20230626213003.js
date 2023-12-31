import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import NousContacter from "./screens/NousContacter";
import Login from "./screens/Login";
import Exo1 from "./screens/Exo1";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator(); // créer le Router

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "blue",
          }}
        >
          <Tab.Screen
            name={"accueil"}
            component={Home}
            options={{
              headerTitle: "Bienvenue ",
              headerTitleAlign: "center",
              tabBarIcon: function ({ color, size }) {
                return (
                  <MaterialCommunityIcons
                    name={"home"}
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
