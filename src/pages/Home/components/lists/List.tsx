import React, { useState } from 'react';
import Tasks from '../tasks/Tasks';
import classes from './listItem.module.css'


interface Task {
  id: number;
  name: string;
}

interface TaskListProps {
  tasks: Task[];
}


const List:React.FC<TaskListProps> = ({ tasks })=> {
  const [thereIsTask, setThereIsTask] = useState<number>();

  const openTask = (index:number)=> {
    setThereIsTask(index);
    if (thereIsTask === index) {
      setThereIsTask(undefined)
    }
  };

  return (
    <ul className={classes.container}>
      {tasks.map((task, index) => (
        <div>
          <li 
            key={index} 
            className={classes.list_item} 
            onClick={()=>openTask(index)}>
              {task.name}
          </li>
          <div>
            {thereIsTask === index ? <Tasks/> : ''}
          </div>
        </div>
      ))}
    </ul>
  );
};

export default List;