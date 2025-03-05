import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import { plus } from "../../utils/Icons";

function Form() {
  const { addIncome, error, setError } = useGlobalContext();
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
    addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className=" my-4">
      <h2 className="mb-3">Add Income</h2>
      <div className=" justify-content-center">
        <div className="">
          <form onSubmit={handleSubmit} className="row ">
            {error && <p className="text-danger">{error}</p>}
            <div className="col-md-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  placeholder="Enter Title"
                  onChange={handleInput("title")}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={amount}
                  placeholder="Enter Amount"
                  onChange={handleInput("amount")}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <DatePicker
                  className="form-control"
                  placeholderText="Select Date"
                  selected={date}
                  dateFormat="dd/MM/yyyy"
                  onChange={(date) =>
                    setInputState({ ...inputState, date: date })
                  }
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <select
                  className="form-select"
                  value={category}
                  onChange={handleInput("category")}
                  required
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option value="salary">Salary</option>
                  <option value="freelancing">Freelancing</option>
                  <option value="investments">Investments</option>
                  <option value="stocks">Stocks</option>
                  <option value="bitcoin">Bitcoin</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="youtube">YouTube</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  value={description}
                  placeholder="Add a Reference"
                  onChange={handleInput("description")}
                ></textarea>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-primary d-flex align-items-center gap-2"
              >
                {plus} Add Income
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
