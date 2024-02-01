import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-course-53a2c-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
