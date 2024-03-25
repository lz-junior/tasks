import React, {useState} from "react";


// interface SubtaskProps {
//   subtask: string;
// }

const SubTask = ()=> {
  const [task, setTask] = useState<any>();
  const addSubtask = ()=> {

  }


  return (
    <div>
      <h4>SubTask</h4>
      <ul>
        {task && task.map((task: any, index: any)=> {
          <li>
            <input type="checkbox" key={index}/>
            <input type="text" key={index} value={task}/>
          </li>
        })}
      </ul>

      <form onSubmit={addSubtask}>
        <input 
          type="text"
          placeholder="add new subtask"
          value={task}
          onChange={(e)=> setTask(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </div>
  )
}

export default SubTask;