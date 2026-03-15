//import liraries
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { UserProps } from "../types";

// create a component
const ProfileHeader = ({ user }: UserProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#040d0f",
  },
  email: {
    marginTop: 5,
    fontSize: 16,
    color: "#060d12",
  },
});

//make this component available to the app
export default ProfileHeader;
