import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import { useColorScheme } from "@/src/components/useColorScheme";
import Colors from "@/src/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { SymbolView } from "expo-symbols";
import React from "react";
import { Pressable } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />

      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="restaurant-menu" size={size} color={color} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable style={{ marginRight: 15 }}>
                {({ pressed }) => (
                  <SymbolView
                    name={{ ios: "info.circle", android: "info", web: "info" }}
                    size={25}
                    tintColor={Colors[colorScheme].text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="OrderScreen"
        options={{
          title: "Orders",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="list" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
