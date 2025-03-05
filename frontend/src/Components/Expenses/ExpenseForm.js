import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import { plus } from "../../utils/Icons";

function ExpenseForm() {
  const { addExpense, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Add Expense</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            value={title}
            name="title"
            placeholder="Expense Title"
            onChange={handleInput("title")}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            value={amount}
            name="amount"
            placeholder="Expense Amount"
            onChange={handleInput("amount")}
            required
          />
        </div>
        <div className="col-md-6">
          <DatePicker
            className="form-control"
            placeholderText="Enter A Date"
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setInputState({ ...inputState, date: date })}
            required
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={category}
            name="category"
            onChange={handleInput("category")}
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="education">Education</option>
            <option value="groceries">Groceries</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="takeaways">Takeaways</option>
            <option value="clothing">Clothing</option>
            <option value="travelling">Travelling</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="col-12">
          <textarea
            className="form-control"
            name="description"
            value={description}
            placeholder="Add A Reference"
            rows="4"
            onChange={handleInput("description")}
          ></textarea>
        </div>
        <div className="col-12 d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-primary d-flex align-items-center"
          >
            {" "}
            <span className="me-2">{plus}</span>
            <span>Add Expense</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
