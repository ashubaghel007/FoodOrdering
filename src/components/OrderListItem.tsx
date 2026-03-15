import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { OrderListItemProps } from "../types";

// create a component
const OrderListItem = ({ order, disabled = false }: OrderListItemProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push(`/orders/${order.id}`)}
      disabled={disabled}
    >
      <View style={styles.details}>
        <Text style={styles.number}>Order #{order.id}</Text>
        <Text style={styles.time}>{order.created_at}</Text>
      </View>
      <Text style={styles.status}>{order.status}</Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 70,
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  details: {
    flex: 1,
    marginLeft: 20,
    gap: 5,
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f0a0a",
  },
  time: {
    fontSize: 16,
    color: "#956565",
  },
  status: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#0f0606",
    fontWeight: "600",
  },
});

//make this component available to the app
export default OrderListItem;
