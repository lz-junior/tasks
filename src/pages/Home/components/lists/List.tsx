import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../../redux/store';
import { deleteList } from '../../../../redux/taskReducer';
import Tasks from '../tasks/Tasks';
import classes from './listItem.module.css';
import { GoTrash } from "react-icons/go";


interface List {
  id: number;
  name: string;
}

interface ListProps {
  lists: List[];
}


const List:React.FC<ListProps> = ()=> {
  const [openTaskIndex, setOpenTaskIndex] = useState<number | undefined>();
  const lists = useSelector((state:RootState) => state.tasks.lists);
  const dispatch: AppDispatch = useDispatch();

  const toogleTasks = (index:number)=> {
    if (openTaskIndex === index) {
      setOpenTaskIndex(undefined)
    }else{
      setOpenTaskIndex(index)
    }
  };
  const deleteItem = (index:number)=> {
    dispatch(deleteList(index))
  }

  return (
    <ul className={classes.container}>
      {lists.map((list, index) => (
        <div key={list.id} className={classes.content}>
          
          <div className={classes.div_item}>
            <li 
              className={classes.list_item} 
              onClick={()=>toogleTasks(index)}>
                {list.name}
            </li>
            <button 
              className={classes.btn_delete}
              onClick={()=>deleteItem(list.id)}>
                <GoTrash/>
            </button>
          </div>

          <div className={classes.div_tasks}>
            {openTaskIndex === index ? <Tasks listId={list.id}/> : null}
          </div>

        </div>
      ))}
    </ul>
  );
};

export default List;