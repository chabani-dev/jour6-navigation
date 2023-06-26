import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
        tabBarActiveTintColor : "red" , 
        tabBarInactiveTintColor : "blue" }}>
          <Tab.Screen name={'accueil'} component={Home} options={{
          headerTitle : "Bienvenue ",
          headerTitleAlign : "center",
          tabBarIcon: function({ color, size }){
          return <MaterialCommunityIcons name={'home'} size={size} color={color} />
                }
            }}/>
      
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
