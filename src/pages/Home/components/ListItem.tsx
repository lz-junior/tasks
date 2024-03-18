import React, { useState } from 'react';
import classes from "./listItem.module.css"


interface TaskItemProps {
  task: string;
}


const CheckList: React.FC<TaskItemProps> = ({ task })=> {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = ()=> {
    setIsChecked(!isChecked);
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
        className={classes.item}>
          {task}
      </button>
    </div>
  );
}

export default CheckList;