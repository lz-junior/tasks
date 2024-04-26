import React, { useState } from "react";
import { addTask } from "../../../../redux/taskReducer";
import { useDispatch, /*useSelector*/ } from "react-redux";

import classes from "./tasks.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { AppDispatch } from "../../../../redux/store";


interface TaskProps {
  initialTasks?: string[];
}


const Tasks: React.FC<TaskProps> = ({ initialTasks = [] })=> {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState<string[]>(initialTasks);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTask = (e:any)=> {
    e.preventDefault();
    if (taskInput.trim()) {
      dispatch(addTask(taskInput));
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  }


  return (
    <div className={classes.container}>
      <h3>Tasks</h3>
      
      <ul className={classes.ul}>
        {tasks.map((task:string, index:number)=> {
          return <li key={index} className={classes.li}>{task}</li>
        })}
      </ul>

      <form onSubmit={handleAddTask} className={classes.form}>
        <input
          type="text"
          placeholder="add a new list"
          className={classes.input_task}
          value={taskInput}
          onChange={(e)=> setTaskInput(e.target.value)}
        />
        <button type="submit" className={classes.btn_submit}><IoIosAddCircleOutline size={25}/></button>
      </form>

    </div>
  );
}

export default Tasks;