import React, { useState, createContext, useContext } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";

// Create ExpenseTrackerContext
const ExpenseTrackerContext = createContext();

// ExpenseTrackerProvider component
function ExpenseTrackerProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  
  const addExpense = (expense) => {
    setTransactions([...transactions, expense]);
  };

  const getTotalIncome = () =>
    transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((total, transaction) => total + transaction.amount, 0);

  const getTotalExpense = () =>
    transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((total, transaction) => total + transaction.amount, 0);

  const value = {
    transactions,
    addExpense,
    getTotalIncome,
    getTotalExpense,
  };

  return (
    <ExpenseTrackerContext.Provider value={value}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
}
