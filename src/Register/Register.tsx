// src/Register/Register.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert("Заполните все поля");
      return;
    }

    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    if (password.length < 6) {
      alert("Пароль должен быть не короче 6 символов");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email }));
    alert("Регистрация прошла успешно! Вы вошли в систему.");
    navigate("/profile");
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">РЕГИСТРАЦИЯ</h2>
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
        <input
          type="password"
          placeholder="Повторите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="auth-input"
          required
        />
        <button type="submit" className="auth-button">
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>
      </form>
      <p className="auth-link">
        Уже есть аккаунт?{" "}
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="auth-link-button"
        >
          Войти
        </button>
      </p>
    </div>
  );
};

export default Register;