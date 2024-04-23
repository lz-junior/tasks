// src/components/TaskList.tsx
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



const List: React.FC<TaskListProps> = ({ tasks })=> {
  // const [checkedIndexes, setCheckedIndexes] = useState<boolean[]>(Array(tasks.length).fill(false))
  // const [openTasks, setOpenTasks] = useState(false);
  // const [task, setTask] = useState<string[]>([]);

  // const toggleCheckbox = (index:number)=> {
  //   setCheckedIndexes(prev => {
  //     const newCheckedIndexes = [...prev];
  //     newCheckedIndexes[index] = !newCheckedIndexes[index];
  //     return newCheckedIndexes;
  //   });
  // }
  // const openTask = (index:number)=> {
  //   setOpenTasks(!openTasks);
  //   console.log(index)
  // }
  // const handleAddTask = (newTask: string)=> {
  //   setTask(prevTask => [...prevTask, newTask])
  // }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
      {/* {tasks.map((task:string, index:number)=> (
        <div key={index}>
          <div className={classes.container}>
            <input
              type="checkbox"
              className={classes.checkbox}
              checked={checkedIndexes[index]}
              onChange={()=> toggleCheckbox(index)}
            />
            <button 
              style={{ 
                textDecoration: checkedIndexes[index] ? 'line-through' : 'none',
                opacity: checkedIndexes[index] ? '0.4' : '1' 
              }}
              onClick={()=> openTask(index)}>
                {task}
            </button>
          </div>
        </div>
      ))} */}
        {/* <div className={classes.tasksOpened}>
          {openTasks && <Tasks saveTask={task} onAddTask={handleAddTask} />}
        </div> */}
    </ul>
  );
};

export default List;