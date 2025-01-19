import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text className="text-lg font-bold">Budget Tracker</Text>
			<Link href="/sign-in">Sign In</Link>
			<Link href="/profile">Profile</Link>
		</View>
	);
}
