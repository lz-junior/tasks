import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";


interface TaskItemProps {
  task: string;
}


const CheckList: React.FC<TaskItemProps> = ({ task })=> {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = ()=> {
    setIsChecked(!isChecked);
  }
  
  
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <button style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
        {task}
      </button>
      <button><FaTrash/></button>
    </div>
  );
}

export default CheckList;