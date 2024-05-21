import React, { useState } from "react";
import { addTask, deleteTask } from "../../../../redux/taskReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";

import { IoIosAddCircleOutline } from "react-icons/io";
import { GoTrash } from "react-icons/go";
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

  const deleteItem = (index:number) => {
    dispatch(deleteTask(index));
  };


  return (
    <div className={classes.container}>
      <h3>Tasks</h3>
      
      <ul className={classes.ul}>
        {tasks.map((task) => {
          return (
            <div className={classes.content}>
              <li key={task.id} className={classes.li}>
                {task.name}
              </li>
              <button 
                className={classes.btn_delete}
                onClick={()=> deleteItem(task.id)}>
                  <GoTrash style={{ color: 'blue' }} />
              </button>
            </div>
          )
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