import React, { useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";
import { rupee } from "../../utils/Icons";
import Chart from "../Chart/Chart";

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">All Transactions</h2>
      <div className="row g-4 mt-3">
        {/* Chart Section */}
        <div className="col-md-8">
          <Chart />
          <div className="row px-3 text-center d-flex align-items-center justify-content-between mt-4">
            <div className="col-md-3 p-3 bg-light border rounded">
              <h5 className="fw-bold">Total Income</h5>
              <p className="fw-bold">
                {rupee} {totalIncome()}
              </p>
            </div>
            <div className="col-md-3 p-3 bg-light border rounded">
              <h5 className="fw-bold">Total Expense</h5>
              <p className="fw-bold">
                {rupee} {totalExpenses()}
              </p>
            </div>
            <div className="col-md-3 p-3 bg-light border rounded text-success">
              <h5 className="fw-bold">Total Balance</h5>
              <p className="fw-bold">
                {rupee} {totalBalance()}
              </p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="col-md-4">
          <h5 className="mt-4">
            <span className="fw-bold">Salary</span>
          </h5>
          <div className="d-flex justify-content-between bg-light p-3 border rounded">
            <div>
              <small>Min</small>
              <p className="fw-bold">
                ₹{Math.min(...incomes.map((item) => item.amount))}
              </p>
            </div>
            <div>
              <small>Max</small>
              <p className="fw-bold">
                ₹{Math.max(...incomes.map((item) => item.amount))}
              </p>
            </div>
          </div>

          <h5 className="mt-4">
            <span className="fw-bold">Expense</span>
          </h5>
          <div className="d-flex justify-content-between bg-light p-3 border rounded">
            <div>
              <small>Min</small>
              <p className="fw-bold">
                ₹{Math.min(...expenses.map((item) => item.amount))}
              </p>
            </div>
            <div>
              <small>Max</small>
              <p className="fw-bold">
                ₹{Math.max(...expenses.map((item) => item.amount))}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <div>
        <History />
      </div>
    </div>
  );
}

export default Dashboard;
