import { createAsyncThunk } from '@reduxjs/toolkit'

const apiURL = process.env.REACT_APP_API_URL

export const getTodos = createAsyncThunk(
  'todoGroup/getTodos',
  async (bearerToken, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
        method: 'GET'
      }
      const res = await fetch(
        `${apiURL}/todos`,
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

export const createTodoGroup = createAsyncThunk(
  'todoItem/createTodoGroup',
  async ({bearerToken, data}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          "title": data.title,
          "description": data.description
        })
      }
      const res = await fetch(
        `${apiURL}/todos`,
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