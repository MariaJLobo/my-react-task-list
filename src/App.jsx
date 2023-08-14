import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';

const tasks = [
  { name: 'Lavar los trastes', completed: true },
  { name: 'Ordenar mi cuarto', completed: false },
  { name: 'Hacer ejercicio', completed: true },
  // ...add more tasks here
];

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;