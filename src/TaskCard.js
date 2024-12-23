import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function TaskCard({ task, index }) {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className="task-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
