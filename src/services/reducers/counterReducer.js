import { increment_value, decrement_value } from "../types";

const initialState = {
  counter: 5,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case increment_value:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case decrement_value:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
}
