import { configureStore } from '@reduxjs/toolkit'
import firebaseUser from './slices/firebaseUser'
import userMessege from './slices/userMessege'


export default configureStore({
  reducer: {
    loguser : firebaseUser,
    usermessege:userMessege
  },
})