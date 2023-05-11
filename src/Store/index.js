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
        state.counter = state.counter + action.value;
      },
      decrement(state) {
        state.counter--;
      },
      decrementby5(state, action) {
        state.counter = state.counter - action.value;
      },
      toggle(state) {
        state.showCounter = !state.showCounter;
      },
    },
  }
);

const Store = configureStore({
  reducer: counterSliceState.reducer,
});

export default Store;
