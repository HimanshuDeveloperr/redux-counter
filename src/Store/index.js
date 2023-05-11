import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

createSlice(
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

const CounterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "incrementby2") {
    return {
      counter: state.counter + 2,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "incrementby5") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrementby2") {
    return {
      counter: state.counter - 2,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrementby5") {
    return {
      counter: state.counter - action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const Store = createStore(CounterReducer);

export default Store;
