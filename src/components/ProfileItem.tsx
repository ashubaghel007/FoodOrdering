//import liraries
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MenuOption } from "../types";

// create a component
const ProfileItem = ({ item }: { item: MenuOption }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name={item.icon as any}
        size={24}
        style={styles.leftIcon}
      />
      <Text style={styles.title}>{item.title}</Text>
      <MaterialIcons name="chevron-right" size={24} style={styles.rightIcon} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: 70,
    width: "100%",
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  title: {
    fontSize: 17,
    fontWeight: "semibold",
    color: "#1f0a0a",
  },
  rightIcon: {
    marginLeft: "auto",
    color: "#1f0a0a",
    marginRight: 20,
  },
  leftIcon: {
    marginRight: 20,
    color: "#1f0a0a",
    marginLeft: 20,
  },
});

//make this component available to the app
export default ProfileItem;
