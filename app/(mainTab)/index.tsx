import { router } from "expo-router";
import { Text, View ,TouchableOpacity} from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>user list</Text>
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "/user-details/[id]",
            params: {
              id: Math.random()*100,
            },
          });
        }}
      >
        <Text>User List</Text>
      </TouchableOpacity>
    </View>
  );
}
