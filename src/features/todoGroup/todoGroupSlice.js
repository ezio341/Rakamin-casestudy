import { createSlice } from '@reduxjs/toolkit'
import { getTodos } from './todoGroupAction'

const initialState = {
  loading: false,
  error: null,
  list: []
}

const todoGroupSlice = createSlice({
  name: 'todoGroup',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [getTodos.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getTodos.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.list = payload
    },
    [getTodos.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default todoGroupSlice.reducer