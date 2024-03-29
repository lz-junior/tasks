import React, { useState } from 'react';
import classes from "../listItem.module.css"
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
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onCheckboxChange}
      />
      <button 
        style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
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