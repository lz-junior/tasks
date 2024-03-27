import React, {useState} from "react";


// interface SubtaskProps {
//   subtask: string;
// }

const SubTask = ()=> {
  const [task, setTask] = useState<any[]>([]);
  const [isChecked, setIsChecked] = useState(false)

  const addSubtask = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();

    setTask([...task, e.currentTarget.task.value]);
    e.currentTarget.task.value = "";
  }
  const onCheckboxChange = ()=> {
    setIsChecked(!isChecked);
  }


  return (
    <div>
      <h4>SubTask</h4>
      <ul>
        {task.map((task: any, index: any)=> (
          <li key={index}>
            <input 
              type="checkbox" 
              key={index} 
              checked={isChecked}
              onChange={onCheckboxChange}/>
            <input 
              type="text" 
              key={index} 
              value={task} 
              style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
              readOnly/>
          </li>
        ))}
      </ul>

      <form onSubmit={addSubtask}>
        <input 
          type="text"
          placeholder="add new subtask"
          name="task"
        />
        <button type="submit">+</button>
      </form>
    </div>
  )
}

export default SubTask;