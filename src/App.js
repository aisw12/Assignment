import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskColumn from './TaskColumn';
import TaskModal from './TaskModal';
import './App.css';

const API_URL = 'http://localhost:5000/tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Fetch tasks from the mock API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log('Fetched tasks:', response.data);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Handle drag start event
  const handleDragStart = (e, task, columnId) => {
    e.dataTransfer.setData('taskId', task.id);
    e.dataTransfer.setData('sourceColumn', columnId);
  };

  // Handle drop event
  const handleDrop = async (e, destinationColumn) => {
    e.preventDefault();

    const taskId = e.dataTransfer.getData('taskId');
    const sourceColumn = e.dataTransfer.getData('sourceColumn');

    if (!taskId || sourceColumn === destinationColumn) return;

    const taskToMove = tasks.find((task) => task.id === taskId);
    const updatedTask = { ...taskToMove, status: destinationColumn };

    await axios.put(`${API_URL}/${taskToMove.id}`, updatedTask);

    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  // Handle adding a new task
  const handleAddTask = async (newTask) => {
    const response = await axios.post(API_URL, newTask);
    setTasks([...tasks, response.data]);
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Task Management Dashboard</h1>
      <button onClick={() => setShowModal(true)}>Add New Task</button>

      <div className="kanban-board">
        {['To Do', 'In Progress', 'Done'].map((status) => (
          <div
            key={status}
            className="kanban-column"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, status)}
            style={{ minWidth: '300px', marginRight: '20px', backgroundColor: '#f4f4f4' }}
          >
            <h3>{status}</h3>
            <TaskColumn
              status={status}
              tasks={tasks.filter((task) => task.status === status)}
              handleDragStart={handleDragStart}
            />
          </div>
        ))}
      </div>

      {showModal && <TaskModal onClose={() => setShowModal(false)} onSave={handleAddTask} />}
    </div>
  );
};

export default App;
