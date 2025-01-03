import React from 'react';
import './App.css';

const TaskColumn = ({ status, tasks, handleDragStart }) => {
  return (
    <div className="task-column">
      {tasks.length === 0 ? (
        <div className="empty-state">No tasks in this column</div>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="task-item"
            draggable
            onDragStart={(e) => handleDragStart(e, task, status)} 
            style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#e1e1e1', borderRadius: '5px' }}
          >
            <strong>{task.title}</strong>
            <p>{task.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskColumn;
