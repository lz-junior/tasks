import React, { useState } from "react";
import { addTask } from "../../../../redux/taskReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";

import { IoIosAddCircleOutline } from "react-icons/io";
import classes from "./tasks.module.css"


interface TaskProps {
  listId: number;
}


const Tasks: React.FC<TaskProps> = ({ listId })=> {
  const dispatch = useDispatch<AppDispatch>();
  const [taskInput, setTaskInput] = useState('');
  const tasks = useSelector((state: RootState) => 
    state.tasks.tasks.filter((task) => task.listId === listId)
  );

  const handleAddTask = (e:any)=> {
    e.preventDefault();
    if (taskInput.trim()) {
      dispatch(
        addTask({
          name: taskInput,
          listId: listId,
        })
      );
      setTaskInput("");
    }
  };


  return (
    <div className={classes.container}>
      <h3>Tasks</h3>
      
      <ul className={classes.ul}>
        {tasks.map((task) => {
          return <li key={task.id} className={classes.li}>{task.name}</li>
        })}
      </ul>

      <form onSubmit={handleAddTask} className={classes.form}>
        <input
          type="text"
          placeholder="add a new list"
          maxLength={50}
          className={classes.input_task}
          value={taskInput}
          onChange={(e)=> setTaskInput(e.target.value)}
        />
        <button type="submit" className={classes.btn_submit}>
          <IoIosAddCircleOutline size={25}/>
        </button>
      </form>

    </div>
  );
};

export default Tasks;