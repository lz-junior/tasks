import React, { useState } from 'react';
import classes from "../listItem.module.css"
import Tasks from '../tasks/Tasks';


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
      {openTasks && <Tasks/>}
      {/* {openTasks ? <Tasks taskType={[]}/> : ""} */}
    </div>
  );
}

export default CheckList;