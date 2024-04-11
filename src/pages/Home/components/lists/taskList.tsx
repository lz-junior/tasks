// src/components/TaskList.tsx
import React, { useState } from 'react';
// import ListItem from './ListItem';
import classes from './listItem.module.css'
import Tasks from '../tasks/Tasks';





interface TaskListProps {
  tasks: string[];
}



const TaskList: React.FC<TaskListProps> = ({ tasks })=> {

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
      {tasks.map((task, index)=> (
        <div>
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
  
        <div className={classes.tasksOpened}>
          {openTasks && <Tasks saveTask={tasks} onAddTask={handleAddTask} />}
        </div>
      </div>
      ))}
    </ul>
  );
};

export default TaskList;