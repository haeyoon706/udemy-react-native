import { View, Pressable, Text } from "react-native";

function CategoryGridTile(props) {
  const { title, color } = props;

  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
