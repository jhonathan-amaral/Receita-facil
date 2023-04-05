import { useLayoutEffect } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params?.data
        ? route.params?.data.name
        : "Detalhes da receita",
      headerRight: () => {
        <Pressable>
          <Entypo name="heart" size={25} color={"#ff4141"} />;
        </Pressable>;
      },
    });
  }, [navigation, route.params?.data]);

  return (
    <View>
      <Text>{route.params?.data.name} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
  },
});
