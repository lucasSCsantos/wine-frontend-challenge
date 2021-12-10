import { Reducer } from "redux";
import { CountState, CountTypes } from "./types";

const INITIAL_STATE: CountState = {
  number: 0,
};

const reducer: Reducer<CountState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountTypes.ADD:
      return { ...state, number: state.number + 1 };
    case CountTypes.SUBTRACT:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};

export default reducer;
