import React, { useState } from 'react';
import classes from "../listItem.module.css"


interface ItemOfTask {
  tasks: string;
  isChecked: boolean;
  onCheckboxChange: ()=> void;
}


const TaskOfTasks: React.FC<ItemOfTask> = ({ tasks, isChecked, onCheckboxChange })=> {


  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onCheckboxChange}
      />
      <button 
        style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
        className={classes.item}
        >
          {tasks}
      </button>
    </div>
  )
}

export default TaskOfTasks;