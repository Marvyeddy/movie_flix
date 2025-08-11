import { Home, Profile, Saved, Search } from "@/src/assets/icons/icon";
import TabBarGradient from "@/src/components/TabBarGradient";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 70,
          marginBottom: 40,
          marginHorizontal: 15,
          height: 48,
          paddingTop: 4,
          overflow: "hidden",
          position: "absolute",
          borderTopWidth: 0,
          borderTopColor: "transparent",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <TabBarGradient
              focused={focused}
              icon={Home}
              title="Home"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused, color }) => (
            <TabBarGradient
              focused={focused}
              icon={Search}
              title="Search"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused, color }) => (
            <TabBarGradient
              focused={focused}
              icon={Saved}
              title="Saved"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <TabBarGradient
              focused={focused}
              icon={Profile}
              title="Profile"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
