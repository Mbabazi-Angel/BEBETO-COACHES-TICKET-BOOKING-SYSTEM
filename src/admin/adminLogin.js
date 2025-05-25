import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./admin.css"; 
import logo from '../assets/bebeto_logo.png';
import './adminRegister';

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Define the API base URL as a relative path
  const API_BASE_URL = "/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/adminLogin.php`,
        JSON.stringify({ email, password }),
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data.success) {
        localStorage.setItem("adminToken", response.data.token);
        navigate("/admin-dashboard");
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="admin-login">
      <img src={logo} alt="Company Logo" className="logo"></img>     
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
