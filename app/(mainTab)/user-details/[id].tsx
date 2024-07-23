import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {

  const {id} = useLocalSearchParams();
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{id ? 'user details screen '+ " id :- "+id : 'User Not Found'}</Text>
    </View>
  );
}
