import React from "react";
import "./App.css";
import { FaVk, FaTelegramPlane, FaUserCircle } from "react-icons/fa";

export default function App() {
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
      <main className="main">
        <button className="circle">Py</button>
        <button className="circle">X3</button>
      </main>
    </div>
  );
}
