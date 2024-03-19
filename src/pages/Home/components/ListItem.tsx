import React, { useState } from 'react';
import classes from "./listItem.module.css"
import Tasks from './Tasks';


interface TaskItemProps {
  task: string;
}


const CheckList: React.FC<TaskItemProps> = ({ task })=> {
  const [isChecked, setIsChecked] = useState(false);
  const [openTasks, setOpenTasks] = useState(false);

  const handleCheckboxChange = ()=> {
    setIsChecked(!isChecked);
  }
  const openTask = ()=> {
    setOpenTasks(!openTasks);
  }

  
  
  return (
    <div className={classes.container}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <button 
        style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
        className={classes.item}
        onClick={openTask}>
          {task}
      </button>
      {openTasks ? <Tasks task={[task]}/> : ""}
    </div>
  );
}

export default CheckList;