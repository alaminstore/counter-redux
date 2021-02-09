import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../services/actions/counterAction";

function counter({ increment, decrement, count }) {
  return (
    <div>
      <h3>Counter: {count}</h3>
      <br />
      <button className="btn btn-primary" onClick={() => increment(5)}>
        Increment
      </button>{" "}
      &nbsp;
      <button className="btn btn-info" onClick={() => decrement(1)}>
        Decrement
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.counterReducer.counter,
});

export default connect(mapStateToProps, { increment, decrement })(counter);
