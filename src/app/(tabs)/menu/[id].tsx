import products from "@/assets/data/products";
import type { PizzaSize } from "@/src/types";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const pizzaSizes: PizzaSize[] = ["S", "M", "L", "XL"];

// create a component
const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M"); // by default medium size is selected

  if (!product) {
    // if product not found, show an error message
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.selectSize}>Select size</Text>
      <View style={styles.sizeContainer}>
        {pizzaSizes.map((size) => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeButton,
              selectedSize === size && styles.selectedSizeButton,
            ]}
            onPress={() => setSelectedSize(size)}
          >
            <Text style={styles.sizeButtonText}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
  },
  image: {
    width: "80%",
    aspectRatio: 1,
    marginBottom: 20,
    marginTop: 20,
    alignSelf: "center",
  },
  selectSize: {
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  price: {
    marginHorizontal: 20,
    marginTop: "auto",
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    height: 56,
    marginHorizontal: 20,
    backgroundColor: "#2A628D",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginHorizontal: 20,
  },
  sizeButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedSizeButton: {
    backgroundColor: "#2A628D",
  },
  sizeButtonText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

//make this component available to the app
export default ProductDetailsScreen;
