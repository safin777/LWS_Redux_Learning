import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

const Counter = ({ countBy }) => {
  return (
    <div>
      <h3>Count By-{countBy}</h3>
      <button onClick={increment}>increment</button>
      &nbsp;
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
