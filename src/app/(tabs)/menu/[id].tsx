import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// create a component
const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>ProductDetailsScreen</Text>
      <Text>Product ID: {id}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffff",
  },
});

//make this component available to the app
export default ProductDetailsScreen;
