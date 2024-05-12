import { useState } from "react"
import "./App.css";


function App() {
  const [color, setColor] = useState("olive")
  // console.log(color);

  return (
    <>
    <div className="w-full h-screen duration-200" 
    style= {{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div  className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button className="px-4 py-2 rounded-full text-white" style={{backgroundColor:"red"}} onClick={()=> setColor('red')} >red</button>
          <button className="px-4 py-2 rounded-full text-white" style={{backgroundColor:"green"}} onClick={()=> setColor('green')}>green</button>
          <button className="px-4 py-2 rounded-full text-white" style={{backgroundColor:"blue"}} onClick={()=> setColor('blue')}>blue</button>
          <button className="px-4 py-2 rounded-full text-white" style={{backgroundColor:"pink"}} onClick={()=> setColor('pink')}>pink</button>
          <button className="px-4 py-2 rounded-full text-white" style={{backgroundColor:"black"}} onClick={()=> setColor('black')}>black</button>
          <button className="px-4 py-2 rounded-full text-white" style={{backgroundColor:"purple"}} onClick={()=> setColor('purple')}>purple</button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
