import { createAsyncThunk } from '@reduxjs/toolkit'

const apiURL = process.env.REACT_APP_API_URL

export const getTodoItems = createAsyncThunk(
  'todoItem/getTodoItems',
  async ({groupId, bearerToken}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
        method: 'GET'
      }
      const res = await fetch(
        `${apiURL}/todos/${groupId}/items`,
        config
      ).then(res=>res.json())

      if(res){
        return res
      }
      throw Error(res.message)
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const createTodoItems = createAsyncThunk(
  'todoItem/createTodoItems',
  async ({groupId, bearerToken, data}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          "name": data.name,
          "progress_percentage": data.progress_percentage
        })
      }
      const res = await fetch(
        `${apiURL}/todos/${groupId}/items`,
        config
      ).then(res=>res.json())

      if(res){
        return res
      }
      throw Error(res.message)
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const editTodoItems = createAsyncThunk(
  'todoItem/editTodoItems',
  async ({groupId, bearerToken, data, itemId}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({
          "name": data.name,
          "progress_percentage": data.progress_percentage
        })
      }
      const res = await fetch(
        `${apiURL}/todos/${groupId}/items/${itemId}`,
        config
      ).then(res=>res.json())

      if(res){
        return res
      }
      throw Error(res.message)
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const deleteTodoItems = createAsyncThunk(
  'todoItem/deleteTodoItems',
  async ({groupId, bearerToken, itemId}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${bearerToken}`
        },
        method: 'DELETE'
      }
      const res = await fetch(
        `${apiURL}/todos/${groupId}/items/${itemId}`,
        config
      )
      if(res){
        return itemId
      }
      throw Error(res.message)
      
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const moveTodoItems = createAsyncThunk(
  'todoItem/moveTodoItems',
  async ({groupId, bearerToken, targetTodoId, itemId}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({
          "target_todo_id": targetTodoId
        })
      }
      const res = await fetch(
        `${apiURL}/todos/${groupId}/items/${itemId}`,
        config
      ).then(res=>res.json())

      if(res){
        return res
      }
      throw Error(res.message)
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)