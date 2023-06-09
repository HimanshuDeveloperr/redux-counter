import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../Store/Counter";
const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector((state) => state.counter.counter);//it tells that we are taking state from the counter slice state
  const setCounterToggle=useSelector(state=>state.counter.showCounter)
  // console.log(counter);

  const incrementHandler=()=>{
    dispatch(counterActions.incrementby5(5))
  }


  const decrementHandler=()=>{
    dispatch(counterActions.decrementby5(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { setCounterToggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
