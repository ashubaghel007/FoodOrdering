import products from "@/assets/data/products";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartItem from "../components/CartItem";

// create a component
const Cart = () => {
  const checkoutAction = () => {
    // Implement checkout logic here
    console.log("Checkout button pressed");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CartItem />}
        />
        <TouchableOpacity onPress={checkoutAction}>
          <Text style={styles.checkoutButton}>Checkout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(244, 244, 244, 1)",
  },
  checkoutButton: {
    backgroundColor: "#3b83f7",
    color: "#fff",
    textAlign: "center",
    width: "90%",
    height: 50,
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: "center",
    marginVertical: 20,
  },
});

//make this component available to the app
export default Cart;
