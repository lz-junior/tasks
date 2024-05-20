import React, { useState } from 'react';
import Tasks from '../tasks/Tasks';
import classes from './listItem.module.css'
import { FaTrash } from "react-icons/fa";


interface List {
  id: number;
  name: string;
}

interface ListProps {
  lists: List[];
}


const List:React.FC<ListProps> = ({ lists })=> {
  const [openTaskIndex, setOpenTaskIndex] = useState<number | undefined>();

  const toogleTasks = (index:number)=> {
    if (openTaskIndex === index) {
      setOpenTaskIndex(undefined)
    }else{
      setOpenTaskIndex(index)
    }
  };

  return (
    <ul className={classes.container}>
      {lists.map((list, index) => (
        <div key={list.id} className={classes.div_item}>
          <li 
            className={classes.list_item} 
            onClick={()=>toogleTasks(index)}>
              {list.name}
              <button className={classes.btn_list_item}><FaTrash/></button>
          </li>
          <div className={classes.div_tasks}>
            {openTaskIndex === index ? <Tasks listId={list.id}/> : null}
          </div>
        </div>
      ))}
    </ul>
  );
};

export default List;