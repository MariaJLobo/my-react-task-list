import React from 'react';

const Task = ({ name, completed }) => {
  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <span className="task-name">{name}</span>
      {completed ? <span className="task-status">✔️</span> : <span className="task-status">❌</span>}
    </div>
  );
};

export default Task;