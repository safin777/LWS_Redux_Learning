import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

const Counter = ({ increment, decrement, count, countBy }) => {
  return (
    <div>
      <h3>Countby-{countBy}</h3>
      <h3>{count}</h3>
      <button onClick={decrement}>decrement</button>
      &nbsp;
      <button onClick={increment}>increment</button>
    </div>
  );
};

const mapStateToProps = (state, countBy) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//export default Counter;
