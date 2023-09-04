import { configureStore } from "@reduxjs/toolkit";

type ActionTypes = "INC" | "DEC" | "ADDBYTEN" | "ADDBY" | "DOUBLE" | "HALF";

interface IncrementAction {
  type: "INC";
}

interface DecrementAction {
  type: "DEC";
}

interface AddByTenAction {
  type: "ADDBYTEN";
}

interface AddByAction {
  type: "ADDBY";
  payload: number;
}

interface Double {
  type: "DOUBLE";
}

interface Half {
  type: "HALF";
}

interface State {
  counter: number;
}

const initialState: State = { counter: 10 };

type CounterAction =
  | IncrementAction
  | DecrementAction
  | AddByTenAction
  | AddByAction
  | Double
  | Half;

const reducerFn = (
  state: State = initialState,
  action: CounterAction
): State => {
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  } else if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  } else if (action.type === "ADDBYTEN") {
    return { counter: state.counter + 10 };
  } else if (action.type === "ADDBY") {
    return { counter: state.counter + action.payload };
  } else if (action.type === "DOUBLE") {
    return { counter: state.counter * 2 };
  } else if (action.type === "HALF") {
    return { counter: state.counter / 2}
  }

  return state;
};

const store = configureStore({
  reducer: reducerFn,
});

export default store;
