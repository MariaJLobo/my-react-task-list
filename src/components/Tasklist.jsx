import React, { useState, useEffect } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (taskToToggle) => {
    const updatedTasks = tasks.map((task) =>
      task === taskToToggle ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    if (newTaskName.trim() === '') {
      return; // Don't add empty task
    }

    const newTask = {
      name: newTaskName,
      description: newTaskDescription,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskName('');
    setNewTaskDescription('');
  };

  return (
    <div className="task-list">
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          placeholder="Tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      {tasks.map((task, index) => (
        <Task key={index} task={task} toggleTask={toggleTask} />
      ))}
    </div>
  );
};

export default TaskList;