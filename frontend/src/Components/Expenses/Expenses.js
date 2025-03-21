import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";
import ExpenseForm from "./ExpenseForm";

function Expenses() {
  const { addIncome, expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  // Function to export expenses as CSV
  const exportToCSV = () => {
    if (expenses.length === 0) {
      alert("No expenses to export!");
      return;
    }

    const headers = [
      "Title",
      "Amount",
      "Date",
      "Category",
      "Description",
      "Type",
    ];
    const rows = expenses.map(
      ({ title, amount, date, category, description, type }) =>
        [title, amount, date, category, description, type].join(",")
    );

    const csvContent = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "expenses.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ExpenseStyled>
      <InnerLayout>
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <h1 className="">Expenses</h1>
            <p className="total-income">
              Total Expense:
              <span className="fw-bold text-success mx-2">
                ₹{totalExpenses()}
              </span>
            </p>
          </div>
          {/* Export Button */}
          <button className="btn btn-success" onClick={exportToCSV}>
            Export Expenses to CSV
          </button>
        </div>
        <hr />
        <div className="row income-content">
          <div className="col-md-5 form-container">
            <ExpenseForm />
          </div>
          <div className="incomes col-md-5">
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              // console.log(income)
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;

  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Expenses;
