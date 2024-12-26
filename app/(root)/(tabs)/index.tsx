import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">Welcome to DayMate</Text>
      <Link href="/sign-in">SignIn</Link>
      <Link href="./properties/1">Property</Link>
      <Link href="/create">Create</Link>
      <Link href="/profile">Profile</Link>
      <Link href="./home">Home</Link>
    </View>
  );
}
