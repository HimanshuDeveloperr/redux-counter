import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSliceState = createSlice(
  //will create a slice for each state
  {
    name: "counter",
    initialState: initialState,
    reducers: {
      increment(state) {
        state.counter++;
      },
      incrementby5(state, action) {
        state.counter = state.counter + action.payload;
      },
      decrement(state) {
        state.counter--;
      },
      decrementby5(state, action) {
        state.counter = state.counter - action.payload;
      },
      toggle(state) {
        state.showCounter = !state.showCounter;
      },
    },
  }
);

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

const Store = configureStore({
  reducer: { counter: counterSliceState.reducer, auth:authSlice.reducer}
});

export const counterActions=counterSliceState.actions;
export const authActions=authSlice.actions;
export default Store;
