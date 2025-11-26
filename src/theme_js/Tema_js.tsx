import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tema_js.css";

const TemaJs: React.FC = () => {
  const navigate = useNavigate();

  const topics = ["Массивы", "Объекты", "Циклы"];

  const handleTopicClick = (topic: string) => {
  if (topic === "Массивы") {
    navigate("/js/array");
  } else if (topic === "Объекты") {
    navigate("/js/objects");
  }
};

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

      {/* Логотип JavaScript */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        alt="JavaScript"
        className="js-logo"
      />
    </div>
  );
};

export default TemaJs;