import React, { useState } from "react";
import { addTask } from "../../../../redux/taskReducer";
import { useDispatch, /*useSelector*/ } from "react-redux";

import classes from "./tasks.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { AppDispatch } from "../../../../redux/store";


interface TaskProps {
  
}


const Tasks: React.FC<TaskProps> = ()=> {
  const [tasks, setTasks] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTask = (e:any)=> {
    e.preventDefault();
    if (tasks.trim()) {
      dispatch(addTask(tasks))
      setTasks('');
    }
  }


  return (
    <div className={classes.container}>
      <h3>Tasks</h3>
      
      <ul>
        {tasks.map((task:string)=> {
          <li>{task}</li>

        })}
      </ul>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="add a new list"
          value={tasks}
          onChange={(e)=> setTasks(e.target.value)}
        />
        <button type="submit"><IoIosAddCircleOutline/></button>
      </form>
    </div>
  );
}

export default Tasks;