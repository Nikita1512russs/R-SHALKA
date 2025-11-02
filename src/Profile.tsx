import React from "react";
import { FaDoorOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // возврат на главную страницу
  };

  return (
    <div className="profile-container">
      <button className="back-button" onClick={handleBack}>
        <FaDoorOpen size={28} />
      </button>

      <div className="profile-content">
        <h2>Личный кабинет</h2>
        <p>Тут будет информация о пользователе.</p>
      </div>
    </div>
  );
};

export default Profile;
