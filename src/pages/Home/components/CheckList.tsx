import React, { useState } from 'react';


interface TaskItemProps {
  task: string;
}


const CheckList: React.FC<TaskItemProps> = ({ task })=> {
  const [isChecked, setIsChecked] = useState(false);
  
  
  return (
    <div>
      <input
        type="checkbox"

      />
    </div>
  );
}

export default CheckList;