//import liraries
import products from "@/assets/data/products";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const product = products[1];

// create a component
const CartItem = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => {}} />
        <Text style={styles.quantity}>1</Text>
        <Button title="+" onPress={() => {}} />
      </View>
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
    height: 100,
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
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#220a0a",
    fontWeight: "bold",
  },
});

//make this component available to the app
export default CartItem;
