// themes_py/Array.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Array.css";

const ArrayPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    alert("Генерация задачи по теме 'Массивы'... Скоро будет настоящая ИИ-генерация!");
  };

  const handleBackClick = () => {
    navigate("/tema"); // ← возвращаемся на страницу выбора тем
  };

  return (
    <div className="array-container">
      {/* Левая часть — база по теме */}
      <div className="left-panel">
        <h1>БАЗА ПО ВЫБРАННОЙ ТЕМЕ</h1>
        <h2>МАССИВЫ</h2>

        <div className="theory-content">
          <p>
            <strong>Что такое массив?</strong><br />
            Массив — это упорядоченный набор элементов одного типа, доступ к которым осуществляется по индексу.
          </p>

          <p>
            <strong>Зачем нужны массивы?</strong><br />
            Чтобы хранить и обрабатывать несколько значений как одно целое. Например: список имён, баллы учеников, координаты точек.
          </p>

          <p>
            <strong>Пример использования:</strong><br />
            ```python
            numbers = [1, 2, 3, 4, 5]
            for num in numbers:
                print(num)
            ```
          </p>

          <p>
            <strong>Основные операции:</strong><br />
            - Доступ по индексу: `arr[0]`<br />
            - Изменение элемента: `arr[0] = 10`<br />
            - Длина массива: `len(arr)`<br />
            - Добавление элемента: `arr.append(6)`
          </p>

          <p>
            <strong>Полезные советы:</strong><br />
            - Не забывай про границы индексов (IndexError)<br />
            - Используй циклы для перебора<br />
            - Учи методы: `.append()`, `.pop()`, `.sort()`
          </p>

          <p>
            <strong>Практика:</strong><br />
            Напиши программу, которая находит максимальный элемент в массиве.
          </p>

          <p>
            <strong>Дополнительно:</strong><br />
            Многомерные массивы, списки в Python, работа с индексами, срезы.
          </p>
        </div>

        <button className="generate-btn" onClick={handleGenerateClick}>
          ГЕНЕРАЦИЯ ЗАДАЧИ
        </button>
      </div>

      {/* Правая часть — задача */}
      <div className="right-panel">
        {/* Кнопка НАЗАД — теперь в начале правой панели, перед заголовком */}
        <button className="back-button" onClick={handleBackClick}>
          ← Назад
        </button>

        <h1>ЗАДАЧА</h1>
        <div className="task-placeholder">
          <p>Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.</p>
          <p>Пример: <code>sum_array([1, 2, 3]) → 6</code></p>
        </div>

        <div className="code-editor">
          <h3>КОД</h3>
          <textarea
            placeholder="Напишите решение здесь..."
            rows={15}
            className="code-input"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ArrayPage;