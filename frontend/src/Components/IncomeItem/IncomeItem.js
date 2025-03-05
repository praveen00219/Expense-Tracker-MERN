import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { dateFormat } from "../../utils/dateFormat";
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  rupee,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../../utils/Icons";
import Button from "../Button/Button";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      default:
        return "";
    }
  };

  return (
    <div className="card w-100 shadow-sm p-3 mb-3">
      <div className="d-flex align-items-center ">
        <div
          className="d-flex justify-content-center align-items-center rounded-circle bg-light me-3"
          style={{
            width: "60px",
            height: "60px",
            border: `3px solid ${indicatorColor}`,
          }}
        >
          {type === "expense" ? expenseCatIcon() : categoryIcon()}
        </div>
        <div className="flex-grow-1">
          <h5 className="mb-1">{title}</h5>
          <p className="mb-1 text-muted">
            {rupee} {amount}
          </p>
          <p>
            {" "}
            {calender} {dateFormat(date)}
          </p>
          <p className="mb-1 text-muted d-flex align-items-start">
            <span className=""> {comment}</span>
            <span className="ml-2 mx-2"> {description}</span>
          </p>
        </div>
        <Button
          icon={trash}
          className="btn btn-danger"
          onClick={() => deleteItem(id)}
        />
      </div>
    </div>
  );
}

export default IncomeItem;
