import React, { useState } from "react";
import "./Login.css";
import "./SignUpModal.css";
import axios from "axios";
import SignUpModal from "./SignUpModal.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill in all fields");
      return;
    }

    console.log("Logging in with:", { email, password });

    try {
      const response = await axios.post(
        "http://localhost:3003/api/users/login", { email, password }
      ); // Send email and password as JSON
      console.log("Login successful:", response.data);
      setError("ola " + response.data.token);
    } catch (error) {
      setError(error.response ? error.response.data.message : "Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={toggleModal} style={{ marginTop: "10px" }}>
        Sign Up
      </button>
      {/* Modal for Sign Up */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <SignUpModal isOpen={isModalOpen} onClose={toggleModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
