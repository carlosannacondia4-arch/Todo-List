import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TodoFormModal from "../components/TodoFormModal.jsx";

export default function TodoDetail({ todos, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);

  const todo = todos.find((t) => t.id === Number(id));

  if (!todo) {
    return (
      <main className="detail-page">
        <div className="detail-card not-found">
          <h2>Tugas tidak ditemukan</h2>
          <p>Tugas dengan ID {id} tidak ada atau sudah dihapus.</p>
          <button className="btn btn-red" onClick={() => navigate("/")}>Kembali</button>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <section className="detail-card">
        <div className="detail-col">
          <div className="field">
            <span className="label">Judul</span>
            <p className="value">{todo.title}</p>
          </div>
          <div className="field">
            <span className="label">Deskripsi</span>
            <div className="desc-box">{todo.description || "-"}</div>
          </div>
        </div>

        <div className="detail-col">
          <div className="field">
            <span className="label">Status</span>
            <p className="value">{todo.status}</p>
          </div>
          <div className="field">
            <span className="label">Prioritas</span>
            <p className="value">{todo.priority}</p>
          </div>
          <div className="field">
            <span className="label">Deadline</span>
            <p className="value">{todo.deadline}</p>
          </div>
          <div className="row actions">
            <button className="btn btn-red" onClick={() => navigate("/")}>Kembali</button>
            <button className="btn btn-blue" onClick={() => setShowEdit(true)}>Update</button>
          </div>
        </div>
      </section>

      {showEdit && (
        <TodoFormModal
          initialData={todo}
          onSubmit={(data) => onUpdate(todo.id, data)}
          onClose={() => setShowEdit(false)}
        />
      )}
    </main>
  );
}
