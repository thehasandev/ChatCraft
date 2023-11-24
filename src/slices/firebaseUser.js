import { createSlice } from '@reduxjs/toolkit'

export const firebaseUser = createSlice({
  name: 'user',
  initialState: {
    value: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  },
  reducers: {
    activeuser: (state,action) => {
      state.value = action.payload
    },
  },
})

export const { activeuser } = firebaseUser.actions

export default firebaseUser.reducer