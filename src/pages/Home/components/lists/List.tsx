// src/components/TaskList.tsx
import React, { useState } from 'react';
import Tasks from '../tasks/Tasks';

import classes from './listItem.module.css'



interface TaskListProps {
  tasks: string[];
}



const List: React.FC<TaskListProps> = ({ tasks })=> {
  const [isChecked, setIsChecked] = useState(false);
  const [openTasks, setOpenTasks] = useState(false);
  const [task, setTask] = useState<string[]>([]);

  const handleCheckboxChange = ()=> {
    setIsChecked(!isChecked);
  }
  const openTask = ()=> {
    setOpenTasks(!openTasks);
  }
  const handleAddTask = (newTask: string)=> {
    setTask(prevTask => [...prevTask, newTask])
  }

  return (
    <ul>
      {tasks.map((task:string, index:number)=> (
        <div key={index}>
          <div className={classes.container}>
            <input
              type="checkbox"
              className={classes.checkbox}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <button 
              style={{ 
                textDecoration: isChecked ? 'line-through' : 'none',
                opacity: isChecked ? '0.4' : '1' 
              }}
              onClick={openTask}>
                {task}
            </button>
          </div>
        </div>
      ))}
        <div className={classes.tasksOpened}>
          {openTasks && <Tasks saveTask={task} onAddTask={handleAddTask} />}
        </div>
    </ul>
  );
};

export default List;