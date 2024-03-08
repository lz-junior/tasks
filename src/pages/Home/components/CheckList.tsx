import React, { useState } from 'react';


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
      <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
        {task}
      </span>
    </div>
  );
}

export default CheckList;