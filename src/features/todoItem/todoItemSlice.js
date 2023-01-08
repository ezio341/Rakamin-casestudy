import { createSlice } from '@reduxjs/toolkit'
import { getTodoItems } from './todoItemAction'

const initialState = {
  loading: false,
  error: null,
  data: []
}

const todoGroupSlice = createSlice({
  name: 'todoItem',
  initialState,
  reducers: {},
  extraReducers: {
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
      // state.data = payload
    },
    [getTodoItems.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default todoGroupSlice.reducer