import React, { useState } from 'react';

const TaskModal = ({ onClose, onSave }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('To Do'); 

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskTitle) {
      alert("Title is required");
      return;
    }

    
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      status: taskStatus,
    };
    onSave(newTask);
    setTaskTitle('');
    setTaskDescription('');
    setTaskStatus('To Do');
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description (Optional)</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              style={{marginTop:"20px"}}
            />
          </div>
          <div>
            <label>Status</label>
            <select
              value={taskStatus}
              onChange={(e) => setTaskStatus(e.target.value)}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div>
            <button type="submit">Save Task</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
