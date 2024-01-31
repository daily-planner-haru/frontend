import React, { useState } from 'react';
import './App.css';

const MainScreen = () => {
  const [todayDate, setTodayDate] = useState(new Date().toLocaleDateString());
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
  ]);

  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (text) => {
    if (text.trim() !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text, completed: false },
      ]);
    }
  };

  return (
    <div className="main-container">
      <h1>하루
      </h1>
      <p>{todayDate}</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
            <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.text}
              </span>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskCompletion(task.id)}
              />
            </label>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter new task..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTask(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <MainScreen/>
    </div>
  );
};

export default App;