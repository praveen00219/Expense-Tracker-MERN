import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import IncomeItem from "../IncomeItem/IncomeItem";

function Income() {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1 className="">Incomes</h1>
        <p className="total-income">
          Total Income:{" "}
          <span className="fw-bold text-success mx-2">₹{totalIncome()}</span>
        </p>
        <hr />
        <div className="row income-content">
          <div className="col-md-5  form-container">
            <Form />
          </div>
          <div className="incomes col-md-5">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
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
                  deleteItem={deleteIncome}
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

export default Income;
