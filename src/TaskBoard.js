import React from 'react';
import TaskColumn from './TaskColumn';
import { updateTask } from './api';
import { DragDropContext } from 'react-beautiful-dnd';

function TaskBoard({ tasks, setTasks }) {
  const columns = ['To Do', 'In Progress', 'Done'];

  const onDragEnd = async (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex(task => task.id === +result.draggableId);
    const task = updatedTasks[taskIndex];

    task.status = destination.droppableId;
    await updateTask(task);

    setTasks(updatedTasks);
  };

  const tasksByStatus = columns.reduce((acc, column) => {
    acc[column] = tasks.filter(task => task.status === column);
    return acc;
  }, {});

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="task-board">
        {columns.map(column => (
          <TaskColumn
            key={column}
            column={column}
            tasks={tasksByStatus[column]}
          />
        ))}
      </div>
    </DragDropContext>
  );
}

export default TaskBoard;
