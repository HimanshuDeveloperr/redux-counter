import { createStore } from "redux";

const initialState={ counter: 0 ,showCounter:true}

const CounterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter:state.showCounter
    };
  }

  if (action.type === "incrementby2") {
    return {
      counter: state.counter + 2,
      showCounter:state.showCounter

    };
  }

  if (action.type === "incrementby5") {
    return {
      counter: state.counter + action.value,
      showCounter:state.showCounter

    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter:state.showCounter

    };
  }

  if (action.type === "decrementby2") {
    return {
      counter: state.counter - 2,
      showCounter:state.showCounter

    };
  }

  if (action.type === "decrementby5") {
    return {
      counter: state.counter - action.value,
      showCounter:state.showCounter

    };
  }

  if(action.type==='toggle'){
    return{
      showCounter:!state.showCounter,
      counter:state.counter
    }
  }

  return state;
};

const Store = createStore(CounterReducer);

export default Store;
