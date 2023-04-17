import "react-native-gesture-handler";

import { Routes } from "./src/routes";

import { NavigationContainer } from "@react-navigation/native";

export default function receitas() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
