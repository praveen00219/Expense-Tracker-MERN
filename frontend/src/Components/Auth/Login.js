import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        // "http://localhost:5000/api/auth/login",
        "https://expense-tracker-backend-1rz0.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );
      // Store the token in localStorage
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response?.data?.error || "Login failed");
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h3 className="mb-3 text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <small className="text-danger d-block mb-2">{error}</small>}
          <button
            type="submit"
            className="btn btn-primary w-100 "
            style={{ marginTop: "24px" }}
          >
            Login
          </button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
