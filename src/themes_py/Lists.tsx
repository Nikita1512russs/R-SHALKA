// themes_py/Lists.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Lists.css";

const ListsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    alert("Генерация задачи по теме 'Списки'... Скоро будет настоящая ИИ-генерация!");
  };

  const handleBackClick = () => {
    navigate("/tema");
  };

  return (
    <div className="lists-container">
      <button className="back-button" onClick={handleBackClick}>
        ← Назад
      </button>

      <div className="left-panel">
        <h1>БАЗА ПО ВЫБРАННОЙ ТЕМЕ</h1>
        <h2>СПИСКИ</h2>

        <div className="theory-content">
          <p>
            <strong>Что такое список?</strong><br />
            Список в Python — это упорядоченная изменяемая коллекция объектов любого типа.
          </p>

          <p>
            <strong>Чем отличается от массива?</strong><br />
            В Python «массивов» как в других языках нет — вместо них используются списки, которые могут хранить разнотипные элементы.
          </p>

          <p>
            <strong>Пример создания:</strong><br />
            ```python
            fruits = ["яблоко", "банан", "апельсин"]
            numbers = [1, 2, 3, 4]
            mixed = [1, "текст", True]
            ```
          </p>

          <p>
            <strong>Основные операции:</strong><br />
            - Доступ по индексу: `fruits[0]` → `"яблоко"`<br />
            - Изменение: `fruits[1] = "груша"`<br />
            - Добавление: `fruits.append("манго")`<br />
            - Удаление: `fruits.pop()` или `del fruits[0]`<br />
            - Длина: `len(fruits)`
          </p>

          <p>
            <strong>Полезные методы:</strong><br />
            - `.append(x)` — добавить в конец<br />
            - `.extend(iterable)` — добавить несколько элементов<br />
            - `.insert(i, x)` — вставить по индексу<br />
            - `.remove(x)` — удалить первое вхождение<br />
            - `.sort()` — сортировать<br />
            - `.reverse()` — развернуть
          </p>

          <p>
            <strong>Практика:</strong><br />
            Напиши функцию, которая удаляет все чётные числа из списка.
          </p>

          <p>
            <strong>Совет:</strong><br />
            Списки — основной инструмент в Python. Изучи их вдоль и поперёк!
          </p>
        </div>

        <button className="generate-btn" onClick={handleGenerateClick}>
          ГЕНЕРАЦИЯ ЗАДАЧИ
        </button>
      </div>

      <div className="right-panel">
        <h1>ЗАДАЧА</h1>
        <div className="task-placeholder">
          <p>Напишите функцию, которая принимает список строк и возвращает только те, что длиннее 5 символов.</p>
          <p>Пример: <code>filter_long(["hi", "hello", "world!"]) → ["hello", "world!"]</code></p>
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

export default ListsPage;