import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        tabBarLabel:"User List",
      }} />
      <Tabs.Screen name="user-details/[id]" />
    </Tabs>
  );
}
