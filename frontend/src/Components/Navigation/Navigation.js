import React from "react";
import avatar from "../../img/avatar.png";
import { signout } from "../../utils/Icons";
import { menuItems } from "../../utils/menuItems";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function Navigation({ active, setActive }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    navigate("/login"); // Redirect to the login page
  };

  return (
    <nav
      className="d-flex flex-column p-3 bg-light border-start rounded vh-80"
      style={{ maxWidth: "300px" }}
    >
      {/* User Section */}
      <div className="d-flex align-items-center mb-4">
        <img
          src={avatar}
          alt="User Avatar"
          className="rounded-circle border border-white p-1 shadow"
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
        />
        <div className="ms-3">
          {/* <h5 className="mb-0 text-primary">Praveen</h5> */}
          {/* <p className="text-muted">Your Money</p> */}
        </div>
      </div>
      {/* Menu Items */}
      <ul className="nav flex-column flex-grow-1">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`nav-item p-2 rounded ${
              active === item.id ? "bg-primary text-white" : "text-muted"
            }`}
            onClick={() => setActive(item.id)}
            style={{ cursor: "pointer" }}
          >
            <span className="me-2">{item.icon}</span>
            {item.title}
          </li>
        ))}
      </ul>
      {/* Sign Out */}
      <div className="mt-auto p-2 border-top" onClick={handleLogout}>
        <li className="nav-item text-danger" style={{ cursor: "pointer" }}>
          {signout} Sign Out
        </li>
      </div>
    </nav>
  );
}

export default Navigation;
