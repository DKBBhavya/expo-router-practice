import { View, Text, StyleSheet, Button } from "react-native";
import { Link, useRouter } from "expo-router";
import React from "react";

const search = () => {
  const router = useRouter();
  const users = [
    {
      name: "Bhavya",
      username: "DKBBhavya",
      surname: "Agarwal",
    },
    {
      name: "John",
      username: "John",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>

        {users.map((user) => (
          <Link
            key={user.username}
            href={`/${user.username}`}
            style={styles.link}
          >
            Open profile {user.name}
          </Link>
        ))}

        <Link
          href={{
            pathname: "/DKBBhavya",
            params: { name: "Bhavya", surname: "Agarwal" },
          }}
          style={styles.link}
        >
          Open profile
        </Link>

        <Link href="/John?name=John" style={styles.link}>
          Open profile 2
        </Link>

        <Button onPress={() => router.push("/modal")} title="Open Modal" />

        <Link href="/home/feed" style={styles.link}>
          {" "}
          Open Feed{" "}
        </Link>
      </View>
    </View>
  );
};

export default search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link: {
    fontSize: 24,
    marginVertical: 16,
    fontWeight: "bold",
  },
});
