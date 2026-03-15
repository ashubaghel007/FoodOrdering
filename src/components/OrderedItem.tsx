//import liraries
import products from "@/assets/data/products";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { OrderItemProps } from "../types";

const product = products[1];

// create a component
const OrderedItem = ({ orderItem }: OrderItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: orderItem.products.image || "https://picsum.photos/200",
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{orderItem.products.name}</Text>
        <Text style={styles.price}>${orderItem.products.price.toFixed(2)}</Text>
      </View>
      <Text style={styles.quantity}>{orderItem.quantity}</Text>
    </View>
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
    width: "98%",
    height: 80,
    alignSelf: "center",
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  image: {
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginLeft: 20,
    gap: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f0a0a",
  },
  price: {
    fontSize: 16,
    color: "#221010",
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#220a0a",
    fontWeight: "bold",
  },
});

//make this component available to the app
export default OrderedItem;
