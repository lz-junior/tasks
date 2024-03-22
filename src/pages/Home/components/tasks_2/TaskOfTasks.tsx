import React, { useState } from 'react';
import classes from "../listItem.module.css"


interface ItemOfTask {
  tasks: string[];
}




const TaskOfTasks: React.FC<ItemOfTask> = ({ tasks })=> {
  const [isChecked, setIsChecked] = useState(false);
  const [subTasks, setSubTasks] = useState(false);

  const handleCheckboxChange = ()=> {
    setIsChecked(!isChecked);
  }
  const openSubTasks = ()=> {
    setSubTasks(!subTasks);
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <button 
        style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
        className={classes.item}
        onClick={openSubTasks}>
          {tasks}
      </button>
    </div>
  )
}

export default TaskOfTasks;