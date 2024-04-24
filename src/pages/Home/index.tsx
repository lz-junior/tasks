// src/App.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { addTask } from '../../redux/taskReducer';
import List from './components/lists/List.tsx';
import { IoIosAddCircleOutline  } from "react-icons/io";
import "./home.css";


const Home: React.FC = ()=> {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleAddTask = (e:React.FormEvent) => {
    e.preventDefault()
    if (taskName.trim()) {
      dispatch(addTask(taskName));
      setTaskName('');
    }
  };

  return (
    <div className="container">
      <h1>My lists</h1>
      
      <List tasks={tasks} />
      
      <form onSubmit={handleAddTask} >
        <input
          type="text"
          value={taskName}
          onChange={(e)=> setTaskName(e.target.value)}
          placeholder="add a new list"
        />
        <button type="submit"><IoIosAddCircleOutline /></button>
      </form>
    </div>
  );
};

export default Home;