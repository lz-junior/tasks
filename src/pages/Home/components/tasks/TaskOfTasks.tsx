import React, { useState } from 'react';
import classes from "./tasks.module.css"
import SubTask from '../subtasks/SubTask';


interface ItemOfTask {
  tasks: string;
  isChecked: boolean;
  onCheckboxChange: ()=> void;
}


const TaskOfTasks: React.FC<ItemOfTask> = ({ tasks, isChecked, onCheckboxChange })=> {
  const [subtask, setSubtask] = useState(false);

  const openSubTask = ()=> {
    setSubtask(!subtask)
  }

  return (
    <div className={classes.container}>
      <input
        type="checkbox"
        style={{opacity: isChecked ? '0.4' : '1'}}
        checked={isChecked}
        onChange={onCheckboxChange}
      />
      <button 
        style={{ 
          textDecoration: isChecked ? 'line-through' : 'none',
          opacity: isChecked ? '0.4' : '1' 
        }}
        className={classes.item}
        onClick={openSubTask}
        >
          {tasks}
      </button>
      {subtask && <SubTask/>}
    </div>
  )
}

export default TaskOfTasks;