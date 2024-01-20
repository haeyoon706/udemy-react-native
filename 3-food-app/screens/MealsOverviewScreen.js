import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen(props) {
  const { route } = props;
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) > -1;
  });

  function renderMealItem(itemData) {
    const { item } = itemData;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
