import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './Counter'

import authReducer from './Authh'



const Store = configureStore({
  reducer: { counter: counterReducer, auth:authReducer}
});

export default Store;
