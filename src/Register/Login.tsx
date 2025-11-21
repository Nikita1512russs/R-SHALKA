// src/Register/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Заполните все поля");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email }));
    alert("Вход выполнен!");
    navigate("/profile");
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">ВХОД</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
          minLength={6}
          required
        />
        <button type="submit" className="auth-button">
          ВОЙТИ
        </button>
      </form>
      <p className="auth-link">
        Нет аккаунта?{" "}
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="auth-link-button"
        >
          Зарегистрироваться
        </button>
      </p>
    </div>
  );
};

export default Login;