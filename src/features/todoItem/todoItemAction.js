import { createAsyncThunk } from '@reduxjs/toolkit'

const apiURL = process.env.REACT_APP_API_URL

export const getTodoItems = createAsyncThunk(
  'todoItem/getTodoItems',
  async ({groupId, bearerToken}, { rejectWithValue }) => {
    let collection = []
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