import { createAsyncThunk } from '@reduxjs/toolkit'

const apiURL = process.env.REACT_APP_API_URL

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({email, password})
      }
      const res = await fetch(
        `${apiURL}/auth/login`,
        config
      ).then(res=>res.json())
      if(res.auth_token){
        localStorage.setItem('user_token', res.auth_token)
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