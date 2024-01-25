import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealList/MealsList";

function MealsOverviewScreen(props) {
  const { route, navigation } = props;

  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) > -1;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
