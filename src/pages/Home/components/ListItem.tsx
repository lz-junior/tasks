import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import classes from "./listItem.module.css"


interface TaskItemProps {
  task: string;
}


const CheckList: React.FC<TaskItemProps> = ({ task })=> {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = ()=> {
    setIsChecked(!isChecked);
  }

  const deleteItem = ()=> {
    // fazer função para deletar itens da lista
  }
  
  
  return (
    <div className={classes.container}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <button 
        style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
        className={classes.item}>
          {task}
      </button>
      <button 
        className={classes.itemTrash}
        onChange={deleteItem}>
          <FaTrash/>
      </button>
    </div>
  );
}

export default CheckList;