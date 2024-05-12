import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  //let counter = 5;
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    if(counter == 0){
      return;
    }else{
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>react with Sumit</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>ADD Value</button>
      <> </>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
