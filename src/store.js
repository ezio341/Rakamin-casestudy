import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import todoSlice from './features/todoGroup/todoGroupSlice'
import todoItemSlice from './features/todoItem/todoItemSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    todoGroup: todoSlice,
    todoItem: todoItemSlice
  }
})
export default store