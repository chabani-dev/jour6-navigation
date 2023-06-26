import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import NousContacter from "./screens/NousContacter";
import Login from "./screens/Login";
import Exo1 from "./screens/Article";

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
          <Tab.Screen
            name={"nous-contacter"}
            component={NousContacter}
            options={{
              tabBarIcon: function ({ color, size }) {
                return (
                  <MaterialCommunityIcons
                    name={"contacts"}
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name={"login"}
            component={Login}
            options={{
              tabBarIcon: function ({ color, size }) {
                return (
                  <MaterialCommunityIcons
                    name={"login"}
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name={"Article"}
            component={Exo1}
            options={{
              headerShown: false,
              tabBarIcon: function ({ color, size }) {
                return (
                  <MaterialCommunityIcons
                    name={"article"}
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
