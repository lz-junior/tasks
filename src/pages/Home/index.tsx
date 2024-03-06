import React from 'react';
import Header from '../../components/Header';
import { useState } from 'react';
import './home.css';


interface AddTaskFormProps {
  onAddTask: (task: string)=> void;
}



const Home: React.FC<AddTaskFormProps> = ({ onAddTask })=> {
  const [task, setTask] = useState('');

  
  const handleAddTask = ()=> {
    if(task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  }
  

  return (
    <div>
      <Header/>
      <input
        type="text"
        value={task}
        onChange={(e)=> setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask} >Add</button>
    </div>
  )
};

export default Home;