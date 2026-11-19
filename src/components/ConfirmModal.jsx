import Modal from "./Modal.jsx";

export default function ConfirmModal({ title, message, confirmText, onConfirm, onClose }) {
  return (
    <Modal title={title} onClose={onClose}>
      <p className="confirm-text">{message}</p>
      <div className="row actions">
        <button type="button" className="btn btn-gray" onClick={onClose}>Batal</button>
        <button
          type="button"
          className="btn btn-red"
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          {confirmText}
        </button>
      </div>
    </Modal>
  );
}
