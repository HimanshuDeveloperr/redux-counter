import { createStore } from "redux";

const CounterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "incrementby2") {
    return {
      counter: state.counter + 2,
    };
  }

  if (action.type === "incrementby5") {
    return {
      counter: state.counter + 5,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  if (action.type === "decrementby2") {
    return {
      counter: state.counter - 2,
    };
  }

  if (action.type === "decrementby5") {
    return {
      counter: state.counter - 5,
    };
  }

  return state;
};

const Store = createStore(CounterReducer);

export default Store;
