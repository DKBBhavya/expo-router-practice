import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter, useSearchParams, Stack } from "expo-router";

const profile = () => {
  const router = useRouter();

  const { name, surname, username } = useSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen options={{ headerStyle: { backgroundColor: "yellow" } }} />

      <Text>
        Hello {name} {surname} (@{username})
      </Text>

      <Button onPress={() => router.back()} title="Go Back" />
    </View>
  );
};

export default profile;
