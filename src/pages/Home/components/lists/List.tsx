// src/components/TaskList.tsx
import React, {  } from 'react';
// import Tasks from '../tasks/Tasks';

import classes from './listItem.module.css'


interface Task {
  id: number;
  name: string;
}

interface TaskListProps {
  tasks: Task[];
}


const List:React.FC<TaskListProps> = ({ tasks })=> {
  
  const openTask = (task:Task)=> {
    console.log(task)
  };

  return (
    <ul className={classes.container}>
      {tasks.map((task) => (
        <li 
          key={task.id} 
          className={classes.list_item} 
          onClick={()=>openTask(task)}>
            {task.name}
        </li>
      ))}
    </ul>
  );
};

export default List;