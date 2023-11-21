import { configureStore } from '@reduxjs/toolkit'
import firebaseUser from './slices/firebaseUser'


export default configureStore({
  reducer: {
    loguser : firebaseUser
  },
})