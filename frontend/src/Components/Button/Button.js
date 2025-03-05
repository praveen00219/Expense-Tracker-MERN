import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Button({ name, icon, onClick, className }) {
  return (
    <button
      className={`btn d-flex align-items-center gap-2 ${className}`}
      onClick={onClick}
    >
      {icon}
      {name}
    </button>
  );
}

export default Button;
