import { useState } from "react";
import Modal from "./Modal.jsx";
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from "../data/dummyTodos.js";

const emptyForm = {
  title: "",
  description: "",
  status: "to-do",
  priority: "low",
  deadline: "",
};

// Dipakai untuk "Tambah Todo" (tanpa initialData) dan "Update Todo" (dengan initialData)
export default function TodoFormModal({ initialData, onSubmit, onClose }) {
  const isEdit = Boolean(initialData);
  const [form, setForm] = useState(
    initialData
      ? {
          title: initialData.title,
          description: initialData.description,
          status: initialData.status,
          priority: initialData.priority,
          deadline: initialData.deadline,
        }
      : emptyForm
  );
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.title.trim()) next.title = "Judul wajib diisi";
    if (!form.deadline) next.deadline = "Deadline wajib diisi";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) return setErrors(next);
    onSubmit({ ...form, title: form.title.trim(), description: form.description.trim() });
    onClose();
  };

  return (
    <Modal title={isEdit ? "Update Todo" : "Tambah Todo"} onClose={onClose}>
      <form onSubmit={handleSubmit} noValidate>
        <label className="field">
          <span className="label">Judul</span>
          <input name="title" value={form.title} onChange={handleChange} autoFocus />
          {errors.title && <span className="error">{errors.title}</span>}
        </label>

        <label className="field">
          <span className="label">Deskripsi</span>
          <textarea name="description" rows={3} value={form.description} onChange={handleChange} />
        </label>

        <div className="row">
          <label className="field">
            <span className="label">Status</span>
            <select name="status" value={form.status} onChange={handleChange}>
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <span className="label">Prioritas</span>
            <select name="priority" value={form.priority} onChange={handleChange}>
              {PRIORITY_OPTIONS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="field">
          <span className="label">Deadline</span>
          <input type="date" name="deadline" value={form.deadline} onChange={handleChange} />
          {errors.deadline && <span className="error">{errors.deadline}</span>}
        </label>

        <div className="row actions">
          <button type="button" className="btn btn-red" onClick={onClose}>Batal</button>
          <button type="submit" className="btn btn-blue">{isEdit ? "Update" : "Tambah"}</button>
        </div>
      </form>
    </Modal>
  );
}
