import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Registration from "../screens/Registration";
import theme from "../assets/global/styles/theme";

const Stack = createNativeStackNavigator();

const DefaultHeaderOptions = {
  headerStyle: {
    backgroundColor: theme.colors.darkGray,
    color: theme.colors.white,
  },
  headerTitleStyle: {
    color: theme.colors.white,
  },
  headerLeft: () => null,
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            ...DefaultHeaderOptions,
            headerTitleAlign: "center",
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="AudioHub"
          component={Home}
          options={{
            ...DefaultHeaderOptions,
            headerBackVisible: false,
            headerRight: () => <Entypo name="home" size={24} color="white" />,
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            ...DefaultHeaderOptions,
            title: "Criar conta",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
