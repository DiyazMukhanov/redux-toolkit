import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrHandler = () => {
      dispatch(counterActions.increment());
  };
    const decrHandler = () => {
        dispatch(counterActions.decrement());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(10));
    };

  const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
        <button onClick={incrHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrHandler}>Decrement</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
