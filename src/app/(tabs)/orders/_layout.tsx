//import liraries
import { Stack } from "expo-router";
import React from "react";

// create a component
const OrdersLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Orders" }} />
    </Stack>
  );
};

//make this component available to the app
export default OrdersLayout;
