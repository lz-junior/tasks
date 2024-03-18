// src/App.tsx
import React, { useState } from 'react';
import TaskList from './components/taskList.tsx';



const Home: React.FC = ()=> {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = (e:any) => {
    e.preventDefault()
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>My lists</h1>
      
      <TaskList tasks={tasks} />
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e)=> setNewTask(e.target.value)}
          placeholder="add a new list"
          />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default Home;