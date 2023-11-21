import { createSlice } from '@reduxjs/toolkit'

export const firebaseUser = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    loggeduser: (state,action) => {
    state.value = action.payload
    }
  },
})


export const { loggeduser } = firebaseUser.actions

export default firebaseUser.reducer