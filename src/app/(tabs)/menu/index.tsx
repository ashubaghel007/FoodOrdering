import products from "@/assets/data/products";
import ProductItem from "@/src/components/ProductItem";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const product = products[4];

export default function Index() {
  return (
    <SafeAreaProvider>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ gap: 5 }}
        contentContainerStyle={{ gap: 5, padding: 5 }}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    top: 20,
    width: "80%",
    aspectRatio: 1,
    marginBottom: 20,
    alignSelf: "center",
  },
  title: {
    marginTop: 20,
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: "600", // semi-bold
  },
  price: {
    marginTop: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "400", // regular
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
