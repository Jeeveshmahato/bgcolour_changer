import { useState } from "react"


function App() {
  const [color, setcolor] = useState("red")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
    <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button onClick={()=> setcolor("green")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"red"}}
    >RED</button>
    </div>
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button onClick={()=> setcolor("gray")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"Blue"}}
    >Blue</button>
    </div>
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button onClick={()=> setcolor("yellow")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"pink"}}
    >pink</button>
    </div>
    </div>
     
    </div>
  )
}

export default App
