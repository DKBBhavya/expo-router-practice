import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Messages = () => {
  return (
    <View>
      <Link href="home/messages/messageRoom">Messages</Link>
    </View>
  );
};

export default Messages;
