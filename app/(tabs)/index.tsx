import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useNotification } from "@/context/NotificationContext";
import { Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { expoPushToken, notification, error } = useNotification();
  if (error) return <ThemedText>Error: {error.message}</ThemedText>;

  console.log(notification, null, 2);
  return (
    <ThemedView
      style={{
        flex: 1,
        padding: 10,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ThemedText type="subtitle">
          Your push token: {expoPushToken}
        </ThemedText>
        <ThemedText type="subtitle">Latest notification:</ThemedText>
        <ThemedText>{notification?.request.content.title}</ThemedText>
        <ThemedText>
          {JSON.stringify(notification?.request.content.data, null, 2)}
        </ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
}
