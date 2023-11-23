import { createSlice } from '@reduxjs/toolkit'

export const firebaseUser = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    activeuser: (state,action) => {
      state.value = action.payload
    }
  },
})


export const { activeuser } = firebaseUser.actions

export default firebaseUser.reducer