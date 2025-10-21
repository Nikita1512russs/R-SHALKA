import React from "react";
import "./App.css";
import { FaVk, FaTelegramPlane, FaUserCircle } from "react-icons/fa";

const App: React.FC = () => {
  return (
    <div className="container">
      {/* Верхняя панель */}
      <header className="header">
        <h1 className="logo">Решалка</h1>
        <div className="icons">
          <FaVk className="icon" />
          <FaTelegramPlane className="icon" />
          <FaUserCircle className="icon" />
        </div>
      </header>

      {/* Центральное меню */}
      <main className="main" style={{ display: "flex", gap: "30px", padding: "50px" }}>
        {/* Кнопки-кружки с логотипами */}
        <button className="circle py" title="Python"></button>
        <button className="circle hz" title="ХЗ"></button>
      </main>
    </div>
  );
};

export default App;
