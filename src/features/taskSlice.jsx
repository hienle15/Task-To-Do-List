import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    tasks: [],
    loading: false,
    error: null,
    status: ' All',
    filterStatus: 'All'
}
export const fectchTodo = createAsyncThunk('tasks/fectchTodo', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
    const data = await response.json()
    return data.map(task => (
        {
            id: task.id,
            title: task.title,
            description: '',
            status: task.completed ? "Completed" : "Pending",
        }
    ))
})
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        editTask: (state, action) => {
            const { id, title, description, status } = action.payload
            state.tasks = state.tasks.map(task =>
                task.id == action.payload.id ? action.payload : task
            )
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
         setFilterStatus: (state, action) => {
    state.filterStatus = action.payload; 
  }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fectchTodo.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fectchTodo.fulfilled, (state, action) => {
                state.loading = false
                state.tasks = action.payload
            })
            .addCase(fectchTodo.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})
export const { addTask, editTask, deleteTask,setFilterStatus } = taskSlice.actions
export default taskSlice.reducer;
