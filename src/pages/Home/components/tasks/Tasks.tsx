import React, {useState} from "react";
import TaskOfTasks from "./TaskOfTasks";

interface TaskListProps {
  saveTask: string[];
  onAddTask: (newTask: string)=> void;
}

const Tasks: React.FC<TaskListProps> = ({ saveTask, onAddTask })=> {
  const [task, setTask] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean[]>([]);

  const handleAddTask = (e:React.FormEvent) => {
    e.preventDefault()
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };
  const handleCheckboxChange = (index: number)=> {
    setIsChecked(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };


  return (
    <div>
      <h5>Tasks</h5>

      <ul>
        {saveTask.map((task, index)=> (
          <TaskOfTasks 
            key={index} 
            tasks={task} 
            isChecked={isChecked[index] || false} 
            onCheckboxChange={()=> handleCheckboxChange(index)}/>
        ))}
      </ul>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="add a new task"
          value={task}
          onChange={(e)=> setTask(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default Tasks;