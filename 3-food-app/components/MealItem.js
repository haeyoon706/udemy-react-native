import { View, Text } from "react-native";

function MealItem(props) {
  const { title } = props;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
export default MealItem;
