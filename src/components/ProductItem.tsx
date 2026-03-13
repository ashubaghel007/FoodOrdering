//import liraries
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ProductItemProps {
  id: number;
  name: string;
  image?: string;
  price: number;
}

// create a component
const ProductItem = ({ id, name, image, price }: ProductItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  image: {
    top: 20,
    width: "80%",
    aspectRatio: 1,
    marginBottom: 20,
    alignSelf: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600", // semi-bold
  },
  price: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "400", // regular
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

//make this component available to the app
export default ProductItem;
