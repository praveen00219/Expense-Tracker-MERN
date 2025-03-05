import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  // ✅ Add Income
  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}add-income`, income);
      if (response.status === 200) {
        getIncomes(); // Fetch data only after a successful request
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  // ✅ Fetch Incomes
  const getIncomes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-incomes`);
      setIncomes(response.data);
    } catch (err) {
      setError("Failed to fetch incomes.");
    }
  };

  // ✅ Delete Income
  const deleteIncome = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
      if (res.status === 200) {
        getIncomes();
      }
    } catch (err) {
      setError("Failed to delete income.");
    }
  };

  // ✅ Calculate Total Income
  const totalIncome = () => {
    return incomes.reduce((total, income) => total + income.amount, 0);
  };

  // ✅ Add Expense
  const addExpense = async (expense) => {
    try {
      const response = await axios.post(`${BASE_URL}add-expense`, expense);
      if (response.status === 200) {
        getExpenses(); // Fetch data only after a successful request
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  // ✅ Fetch Expenses
  const getExpenses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-expenses`);
      setExpenses(response.data);
    } catch (err) {
      setError("Failed to fetch expenses.");
    }
  };

  // ✅ Delete Expense
  const deleteExpense = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
      if (res.status === 200) {
        getExpenses();
      }
    } catch (err) {
      setError("Failed to delete expense.");
    }
  };

  // ✅ Calculate Total Expenses
  const totalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  // ✅ Calculate Total Balance
  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  // ✅ Transaction History (Last 3 Transactions)
  const transactionHistory = () => {
    const history = [...incomes, ...expenses].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return history.slice(0, 7);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
