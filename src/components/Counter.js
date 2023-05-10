import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector((state) => state.counter);
  // console.log(counter);

  const incrementHandler=()=>{
    dispatch({type:'incrementby5'})
  }


  const decrementHandler=()=>{
    dispatch({type:'decrementby5'})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
