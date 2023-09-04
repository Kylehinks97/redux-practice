import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

interface RootState {
  counter: number;
}

function App() {
  const [input, setInput] = useState("");
  const counter = useSelector((state: RootState) => state.counter);

  const dispatch = useDispatch();

  function increment() {
    dispatch({ type: "INC" });
  }

  function decrement() {
    dispatch({ type: "DEC" });
  }

  function addByTen() {
    dispatch({ type: "ADDBYTEN", payload: 10 });
  }

  function handleInputChange(e: any) {
    setInput(e.target.value);
  }

  function addBy() {
    if (input) {
      dispatch({ type: "ADDBY", payload: parseInt(input, 10) });
    }
  }

  function double() {
    dispatch({ type: "DOUBLE" });
  }

  function half() {
    dispatch({ type: "HALF" });
  }

  return (
    <>
      <h1>Redux Practice</h1>
      <h2>Counter App</h2>
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addByTen}>Add By 10</button>
      <br />
      <br />
      <label htmlFor="add-by">Add By:</label>
      <input type="text" id="add-by" onChange={(e) => handleInputChange(e)} />
      <button onClick={addBy}>ADD</button>
      <button onClick={double}>Double</button>
      <button onClick={half}>Half</button>
    </>
  );
}

export default App;
