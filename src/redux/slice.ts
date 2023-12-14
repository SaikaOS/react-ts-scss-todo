import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface Todo {
    id?: number,
    title?: string,
    description?: string,
    status?: boolean | null,
}

interface TodosState {
    todos: Todo[];
    filteredTodos: Todo[];
    isFiltered?: boolean,
  }

  const initialState: TodosState = {
    todos: [],
    filteredTodos: [],
    isFiltered: false
  };

export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            const newTodo: Todo = {
                id: Date.now(),
                title: action.payload.title,
                description: action.payload.description,
                status: null,
            }
            state.todos.push(newTodo)
        },
        toggleStatus: (state, action: PayloadAction<Todo>) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos[index].status = action.payload.status
        },
        filteredTodos: (state, action: PayloadAction<boolean | null>) => {
            state.filteredTodos = state.todos.filter((todo) => todo.status === action.payload)
          },
        setFiltered: (state) => {
          state.isFiltered = true
        }
          
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCompletedTodos.fulfilled, (state, action) => {
          state.todos = action.payload 
        });
      },
})

export const fetchCompletedTodos = createAsyncThunk<Todo[],void>('todos/fetchCompletedTodos', async () => {
  const response = await fetch('/api/completedTodos');
  const data = await response.json();
  return data.map((todo: Todo) => todo.title);
});

export const { addTodo, toggleStatus, filteredTodos, setFiltered } = slice.actions

export const totalCompleteTodos = (state: Todo[]) => {
    return state.filter(todo => todo.status === true).length;
  };

export default slice.reducer