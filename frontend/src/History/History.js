import React from "react";
import { useGlobalContext } from "../context/globalContext";

function History() {
  const { transactionHistory } = useGlobalContext();
  const history = transactionHistory();

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Recent History</h2>
      <div className="d-flex flex-column gap-2">
        <div className="row d-flex bg-dark text-white p-2 rounded fw-bold">
          <div className="col-md-4 flex-grow-1">Name</div>
          <div className="col-md-5 flex-grow-1">Transaction ID</div>
          <div className="col-md-3 flex-grow-1">Amount</div>
        </div>
        {history.map((item, index) => {
          const { _id, title, amount, type } = item;
          return (
            <div
              key={_id}
              className={`row d-flex p-2 border rounded shadow-sm text-left ${
                type === "expense" ? "text-danger" : "text-success"
              }`}
            >
              <div className="col-md-4 flex-grow-1 text-left">
                <span className="text-dark">{index + 1}.</span> {title}
              </div>
              <div className="col-md-5 flex-grow-1 text-left">{_id}</div>
              <div className="col-md-3 flex-grow-1 text-left">
                {type === "expense"
                  ? `-${amount <= 0 ? 0 : amount}`
                  : `+${amount <= 0 ? 0 : amount}`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default History;
