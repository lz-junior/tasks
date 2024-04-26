import React, { useState } from 'react';
import Tasks from '../tasks/Tasks';
import classes from './listItem.module.css'


interface List {
  id: number;
  name: string;
}

interface ListProps {
  lists: List[];
}


const List:React.FC<ListProps> = ({ lists })=> {
  const [thereIsTask, setThereIsTask] = useState<number>();

  const openTask = (index:number)=> {
    setThereIsTask(index);
    if (thereIsTask === index) {
      setThereIsTask(undefined)
    }
  };

  return (
    <ul className={classes.container}>
      {lists.map((task, index) => (
        <div key={index}>
          <li 
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