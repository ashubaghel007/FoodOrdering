//import liraries
import user from "@/assets/data/user.json";
import ProfileHeader from "@/src/components/ProfileHeader";
import ProfileItem from "@/src/components/ProfileItem";
import { UserData } from "@/src/types";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// create a component
const Profile = () => {
  const userData = user as UserData;
  return (
    <SafeAreaView>
      <FlatList
        data={userData.menuOptions}
        renderItem={({ item }) => <ProfileItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          gap: 0.5,
          backgroundColor: "transparent",
          marginBottom: 0,
        }}
        ListHeaderComponent={<ProfileHeader user={userData.user} />}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(250, 250, 250, 1)",
  },
});

//make this component available to the app
export default Profile;
