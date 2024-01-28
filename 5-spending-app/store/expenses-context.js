import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-01-25"),
  },
  {
    id: "e2",
    description: "A pair of toursers",
    amount: 89.29,
    date: new Date("2023-12-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2023-11-20"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 15.99,
    date: new Date("2023-09-18"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.99,
    date: new Date("2023-09-01"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-01-20"),
  },
  {
    id: "e7",
    description: "A pair of toursers",
    amount: 89.29,
    date: new Date("2023-12-05"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2023-11-20"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 15.99,
    date: new Date("2023-09-18"),
  },
  {
    id: "e10",
    description: "Another book",
    amount: 18.99,
    date: new Date("2023-09-01"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random.toString();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updateExpenses = [...state];
      updateExpenses[updatableExpenseIndex] = updatedItem;
      return updateExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpenseContextProvider;
