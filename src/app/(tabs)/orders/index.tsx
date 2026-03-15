import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

// create a component
const Index = () => {
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ padding: 10 }}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Index;
