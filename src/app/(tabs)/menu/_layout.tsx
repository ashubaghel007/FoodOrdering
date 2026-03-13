//import liraries
import { Stack } from "expo-router";
import React from "react";

// create a component
const MenuLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Menu" }} />
    </Stack>
  );
};

//make this component available to the app
export default MenuLayout;
