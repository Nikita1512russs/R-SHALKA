// src/Profile.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  // Получаем данные пользователя
  const user = JSON.parse(localStorage.getItem("user") || "null");

  // Если пользователь не авторизован — редирект на главную
  if (!user) {
    navigate("/");
    return null;
  }

  const handleBack = () => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Удаляем данные
    navigate("/"); // Возвращаемся на главную
  };

  return (
    <div className="profile-container">
      {/* Кнопка "Назад" — как на темах */}
      <button className="back-button" onClick={handleBack}>
        ← Назад
      </button>

      <div className="profile-content">
        <h2>ЛИЧНЫЙ КАБИНЕТ</h2>
        <p>Привет, <strong>{user.email}</strong>!</p>
        <p>Вы успешно вошли в систему.</p>
        
        {/* Кнопка "Выйти" */}
        <button className="logout-button" onClick={handleLogout}>
          ВЫЙТИ ИЗ АККАУНТА
        </button>
      </div>
    </div>
  );
};

export default Profile;