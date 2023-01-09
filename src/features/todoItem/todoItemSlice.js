import { createSlice } from '@reduxjs/toolkit'
import { getTodoItems, createTodoItems, editTodoItems, deleteTodoItems, moveTodoItems } from './todoItemAction'

const initialState = {
  loading: false,
  error: null,
  data: [],
  temp: []
}

const todoGroupSlice = createSlice({
  name: 'todoItem',
  initialState,
  reducers: {
    resetItem: (state) => {
      state.data = []
    }
  },
  extraReducers: {
    // get todo
    [getTodoItems.pending]: (state) => {
      state.loading = true
      state.data = []
      state.error = null
    },
    [getTodoItems.fulfilled]: (state, { payload }) => {
      state.loading = false
      if(payload.length){
        state.data.push(...payload)
      }
    },
    [getTodoItems.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    // create todo
    [createTodoItems.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [createTodoItems.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data.push(payload)
    },
    [createTodoItems.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    // edit todo
    [editTodoItems.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [editTodoItems.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data[state.data.findIndex(item=>item.id===payload.id)] = payload
    },
    [editTodoItems.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    // delete todo
    [deleteTodoItems.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [deleteTodoItems.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = state.data.filter(item=>item.id!==payload)
    },
    [deleteTodoItems.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    
    // move todo
    [moveTodoItems.pending]: (state) => {
      state.loading = true
      state.temp = state.data
      state.data = []
      state.error = null
    },
    [moveTodoItems.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = state.temp.map(item=>{
        if(item.id === payload.id){
          return payload
        }
        return item
      })
    },
    [moveTodoItems.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    
  },
})

export const {resetItem} = todoGroupSlice.actions
export default todoGroupSlice.reducer