//import liraries
import { MaterialIcons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

// create a component
const MenuLayout = () => {
  const handleCartNavigation = () => {
    router.push("/cart");
  };
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Pressable onPress={handleCartNavigation} style={{ marginRight: 10 }}>
            <MaterialIcons
              name="add-shopping-cart"
              color={"rgb(41, 48, 179)"}
              size={22}
            />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Menu" }} />
    </Stack>
  );
};

//make this component available to the app
export default MenuLayout;
