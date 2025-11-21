// Tema.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tema.css";

const Tema: React.FC = () => {
  const navigate = useNavigate();

  const handleTopicClick = (topic: string) => {
    console.log("Выбрана тема:", topic);
    alert(`Вы выбрали тему: ${topic}. Скоро будет генерация задачи!`);
  };

  const topics = ["Массивы", "Списки", "Циклы"];

  return (
    <div className="tema-container">
      {/* Кнопка назад */}
      <button className="back-button" onClick={() => navigate("/")}>
        ← Назад
      </button>

      {/* Основной контент */}
      <div className="tema-content">
        <h1 className="title">ТЕМЫ</h1>
        <ul className="topics-list">
          {topics.map((topic, index) => (
            <li key={index} className="topic-item" onClick={() => handleTopicClick(topic)}>
              – {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Логотип Python (как на главной) */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
        alt="Python"
        className="python-logo"
      />
    </div>
  );
};

export default Tema;