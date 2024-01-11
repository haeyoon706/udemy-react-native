import { Text, StyleSheet } from "react-native";
import Colors from "../constants/color";

function Title(props) {
  const { children } = props;

  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: Colors.accent500,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
