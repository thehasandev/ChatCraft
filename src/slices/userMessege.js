import { createSlice } from '@reduxjs/toolkit'

export const userMessege = createSlice({
  name: 'userMessege',
  initialState: {
    value: null
  },
  reducers: {
    user_log: (state,action) =>{
      state.value = action.payload
    },
  },
})

export const { user_log } = userMessege.actions

export default userMessege.reducer