import orders from "@/assets/data/orders";
import OrderedItem from "@/src/components/OrderedItem";
import OrderListItem from "@/src/components/OrderListItem";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const OrderDetails = () => {
  const { id } = useLocalSearchParams();
  const order = orders.find((o) => o.id === Number(id));

  if (!order) {
    return (
      <View style={styles.container}>
        <Text>Order not found</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order #${order.id}` }} />
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderedItem orderItem={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<OrderListItem order={order} disabled={true} />}
        contentContainerStyle={{
          gap: 5,
          paddingVertical: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ffffff",
    padding: 5,
  },
});

export default OrderDetails;
