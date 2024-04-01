// src/App.tsx
import React, { useState } from 'react';
import TaskList from './components/lists/taskList.tsx';
import { IoIosAddCircleOutline  } from "react-icons/io";
import "./home.css";



const Home: React.FC = ()=> {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>('');

  const handleAddTask = (e:any) => {
    e.preventDefault()
    if (task.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask('');
    }
  };

  return (
    <div className="container">
      <h3>My lists</h3>
      
      <TaskList tasks={tasks} />
      
      <form onSubmit={handleAddTask} >
        <input
          type="text"
          value={task}
          onChange={(e)=> setTask(e.target.value)}
          placeholder="add a new list"
        />
        <button type="submit"><IoIosAddCircleOutline /></button>
      </form>
    </div>
  );
};

export default Home;