import React from 'react';

const Task = ({ task, toggleTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`} onClick={() => toggleTask(task)}>
      <div className="task-header">
        <span className="task-name">{task.name}</span>
        {task.completed ? <span className="task-status">✔️</span> : <span className="task-status">❌</span>}
      </div>
      <div className="task-description">{task.description}</div>
    </div>
  );
};

export default Task;
