import React, { useState } from "react";
import classes from "./tasks.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";


interface TaskProps {
  
}


const Tasks: React.FC<TaskProps> = ()=> {
  const [tasks, setTasks] = useState<string>('');

  const handleAddTask = ()=> {

  }


  return (
    <div className={classes.containerTasks}>
      <h3>Tasks</h3>
      <ul>
        {tasks}
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