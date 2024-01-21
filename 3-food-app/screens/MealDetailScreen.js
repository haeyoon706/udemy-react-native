import { Text, View } from "react-native";

function MealDetailScreen(props) {
  const { route } = props;

  const { mealId } = route.params;

  return <View></View>;
}

export default MealDetailScreen;
