import { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList.jsx";
import TodoDetail from "./pages/TodoDetail.jsx";
import Toast from "./components/Toast.jsx";
import { dummyTodos } from "./data/dummyTodos.js";

export default function App() {
  const [todos, setTodos] = useState(dummyTodos);
  const [toast, setToast] = useState(null);

  const notify = useCallback((message, type = "success") => {
    setToast({ message, type, key: Date.now() });
  }, []);

  const addTodo = (data) => {
    const nextId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    setTodos((prev) => [...prev, { ...data, id: nextId }]);
    notify("Tugas berhasil ditambahkan");
  };

  const updateTodo = (id, data) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...data, id } : t)));
    notify("Tugas berhasil diperbarui");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    notify("Tugas berhasil dihapus");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<TodoList todos={todos} onAdd={addTodo} onDelete={deleteTodo} />}
        />
        <Route
          path="/todo/:id"
          element={<TodoDetail todos={todos} onUpdate={updateTodo} />}
        />
      </Routes>
      {toast && <Toast key={toast.key} {...toast} onClose={() => setToast(null)} />}
    </>
  );
}
