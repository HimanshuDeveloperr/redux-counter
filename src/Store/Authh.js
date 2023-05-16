
import { createSlice } from "@reduxjs/toolkit";


const intialAuthState={
    isLoggedIn:false
  }
  
  const authSlice=createSlice(
    {
      name:'authentication',
      initialState:intialAuthState,
      reducers:{
        login (state) {
           state.isLoggedIn=true
        },
        logout (state) {
          state.isLoggedIn=false
        }
      }
    }
  )

  export default authSlice.reducer;
export const authActions=authSlice.actions;
