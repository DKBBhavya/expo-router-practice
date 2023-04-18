import { Stack } from "expo-router";

export default () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "red",
        headerStyle: { backgroundColor: "blue" },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
};