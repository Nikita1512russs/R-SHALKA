import React from "react";
import "./App.css";
import { FaVk, FaTelegramPlane, FaUserCircle } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Tema from "./themes_py/Tema";
import ArrayPage from "./themes_py/Array";
import ListsPage from "./themes_py/Lists";

const Home: React.FC = () => {
  const navigate = useNavigate();

return (
  <div className="container">
    {/* Верхняя панель */}
    <header className="header">
      <h1 className="logo">Решалка</h1>
      <div className="icons" style={{ display: "flex", gap: "20px" }}>
        {/* Ссылки на соцсети */}
        <a
          href="https://vk.ru/tyagunov.nikita"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaVk className="icon" />
        </a>

        <a
          href="https://t.me/nikitaRUSS1512"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane className="icon" />
        </a>

          {/* При нажатии — переход в личный кабинет */}
          <FaUserCircle
            className="icon-profile"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/profile")}
          />
        </div>
      </header>

      {/* Центральное меню */}
      <main className="main" style={{ display: "flex", gap: "30px", padding: "50px" }}>
        <button className="circle py" title="Python" onClick={() => navigate("/tema")}></button>
        <button className="circle hz" title="ХЗ"></button>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tema" element={<Tema />} /> 
        <Route path="/array" element={<ArrayPage />} />
        <Route path="/lists" element={<ListsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
