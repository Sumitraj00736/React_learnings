import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Component/Card";

function App() {
  const [count, setCount] = useState(0);
  let myobj={
    username: "",
    age: "",
  }

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl mb-4 ">
        Tailwind Test</h1>
      <Card username="Sumit" btnText="click me" className="mb-4"/>
      <Card username="Sonu"  />
    </>
  );
}

export default App;
