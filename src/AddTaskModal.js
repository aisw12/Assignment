import React, { useState } from 'react';
import Modal from 'react-modal';

function AddTaskModal({ isOpen, closeModal, addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTask({ title, description, status });
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </Modal>
  );
}

export default AddTaskModal;
