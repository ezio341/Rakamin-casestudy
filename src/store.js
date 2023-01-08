import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import todoSlice from './features/todoGroup/todoGroupSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    todoGroup: todoSlice
  }
})
export default store