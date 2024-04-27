import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface List {
  id: number;
  name: string;
}
interface Task {
  id: number;
  name: string;
  listId: number;
}
  interface TaskState {
    lists: List[];
    tasks: Task[];
  }

const initialState: TaskState = {
  tasks: [],
  lists: [],
};


const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      const newList = {
        id: state.lists.length + 1,
        name: action.payload,
      };
      state.lists.push(newList);
    },
    addTask: (state, action: PayloadAction<{ name: string; listId: number }>) => {
      const newTask = {
        id: state.tasks.length + 1,
        name: action.payload.name,
        listId: action.payload.listId,
      };
      state.tasks.push(newTask)
    }
    // Outros reducers para tarefas, como editar ou remover, podem ser adicionados aqui
  },
});

export const { addList, addTask } = taskSlice.actions;
export default taskSlice.reducer;