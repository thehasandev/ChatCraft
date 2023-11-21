import { createSlice } from '@reduxjs/toolkit'

export const firebaseUser = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    loggeduser: (state,action) => {
     console.log(action.payload)
    }
  },
})


export const { increment, decrement, incrementByAmount } = firebaseUser.actions

export default firebaseUser.reducer