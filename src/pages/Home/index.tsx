// src/App.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { addTask } from '../../redux/taskReducer';
import List from './components/lists/List.tsx';
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
      <h1>My lists</h1>
      
      <List tasks={tasks} />
      
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