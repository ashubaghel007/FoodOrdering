import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import { useColorScheme } from "@/src/components/useColorScheme";
import Colors from "@/src/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          height: 70,
          borderRadius: 35,
          backgroundColor: "rgba(49, 114, 234, 0.9)",
          marginHorizontal: 50,
          borderWidth: 2,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarIconStyle: {
          width: 64,
          height: 64,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />

      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <MaterialIcons
              name="restaurant-menu"
              size={focused ? 32 : 24}
              color={"white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <MaterialIcons
              name="list"
              size={focused ? 32 : 24}
              color={"white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <MaterialIcons
              name="person"
              size={focused ? 32 : 24}
              color={"white"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
