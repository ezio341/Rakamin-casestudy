import { createSlice } from '@reduxjs/toolkit'
import { createTodoGroup, getTodos } from './todoGroupAction'

const initialState = {
  loading: false,
  error: null,
  data: []
}

const todoGroupSlice = createSlice({
  name: 'todoGroup',
  initialState,
  reducers: {
    setData: (data, state) => {
      state.data = data
    }
  },
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.loading = true
      state.data = []
      state.error = null
    },
    [getTodos.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
    },
    [getTodos.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },


    [createTodoGroup.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [createTodoGroup.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data.push(payload)
    },
    [createTodoGroup.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const {setData} = todoGroupSlice.actions
export default todoGroupSlice.reducer